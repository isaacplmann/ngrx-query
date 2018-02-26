import { MutateAsyncAction, MutateParams, RequestAsyncAction } from '../helpers/actions';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import * as actions from 'redux-query/dist/es/actions';
import * as actionTypes from 'redux-query/dist/es/constants/action-types';
import * as httpMethods from 'redux-query/dist/es/constants/http-methods';
import { getQueryKey } from 'redux-query/dist/es/lib/query-key';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { range } from 'rxjs/observable/range';
import { timer } from 'rxjs/observable/timer';
import { catchError, filter, flatMap, map, mergeMap, retryWhen, tap, zip } from 'rxjs/operators';

import * as ngrxQueryActionTypes from '../helpers/actionTypes';
import { NGRX_QUERY_CONFIG } from '../helpers/config';
import { getLatest } from '../helpers/getLatest';
import { invariant } from '../helpers/invariant';
import { NgrxQueryConfig } from '../helpers/ngrxQueryConfig';
import { MockMode } from '../helpers/mockMode';
import { ofType } from '../helpers/ofType';
import { defaultBackoffConfig, defaultEntitiesSelector, defaultQueriesSelector, defaultRetryableStatusCodes } from './../helpers/config';

export function identity(x: any, y?: any, z?: any): any {
  return x;
}

export function optimisticUpdateEntities(optimisticUpdate, entities) {
  return Object.keys(optimisticUpdate).reduce(
    (accum, key) => {
      if (optimisticUpdate[key]) {
        accum[key] = optimisticUpdate[key](entities[key]);
      } else {
        accum[key] = entities[key];
      }

      return accum;
    },
    {});
};

export function updateEntities(update, entities, transformed) {
  // If update not supplied, then no change to entities should be made
  return Object.keys(update || {}).reduce(
    (accum, key) => {
      accum[key] = update[key]((entities || {})[key], (transformed || {})[key]);

      return accum;
    },
    {});
};

export function getPendingQueries(queries: any[]) {
  return queries.filter((query) => query.isPending);
};

@Injectable()
export class NgrxQueryEffects {
  @Effect() public requestAsync: Observable<Action> = this.actions$.pipe(
    ofType(ngrxQueryActionTypes.REQUEST_ASYNC),
    map((action: RequestAsyncAction) => {
      const {
        url,
        force,
        retry,
        update,
      } = action;

      invariant(!!url, 'Missing required `url` field in action handler');
      invariant(!!update, 'Missing required `update` field in action handler');

      const queryKey = getQueryKey(action);

      const state = getLatest(this.store);
      const queries = this.config && this.config.queriesSelector && this.config.queriesSelector(state)
        || defaultQueriesSelector(state);

      const queriesState = queries[queryKey];
      const { isPending, status } = queriesState || <any>{};
      const hasSucceeded = status >= 200 && status < 300;
      const attemptRequest = force || !queriesState || (retry !== false && !isPending && !hasSucceeded);
      return { attemptRequest, action };
    }),
    filter(({ attemptRequest }) => attemptRequest),
    mergeMap(({ action }) => {
      const {
        url,
        body,
        transform = identity,
        update,
        options = <any>{},
        meta,
      } = action;
      const queryKey = getQueryKey(action);

      const start = new Date();
      const { method = httpMethods.GET } = options;

      const request = {
        body,
        headers: options.headers,
        method,
        observe: (options.observe || 'response') as 'response',
        responseType: options.responseType,
        url,
        withCredentials: options.credentials === 'include',
      };

      return of({}).pipe(
        tap(() => {
          this.store.dispatch(actions.requestStart({url, body, request, meta, queryKey}));
        }),
        filter(() => {
          if (this.config && this.config.mock && this.config.mock.mode === MockMode.Mock) {
            const mockActions = this.config.mock.getMockData(queryKey);
            if (mockActions) {
              mockActions.forEach(mockAction => {
                this.store.dispatch(mockAction);
              });
            } else {
              this.store.dispatch(actions.requestFailure({
                url,
                body,
                status: 500,
                responseBody: 'No mock data recorded for ' + queryKey,
                meta,
                queryKey,
              }));
            }
            return false;
          }
          return true;
        }),
        mergeMap(() => {
          return this.http.request(request.method, url, request)
            .pipe(map(response => {
              if (!response.ok) {
                throw response;
              }
              return response;
            }));
        }),
        map(response => {
          const callbackState = getLatest(this.store);
          const entities = this.config && this.config.entitiesSelector && this.config.entitiesSelector(callbackState)
            || defaultEntitiesSelector(callbackState);
          const parsedResponse = response.body;
          const transformed = transform(parsedResponse, response.body, response);
          const newEntities = updateEntities(update, entities, transformed);
          const requestSuccessAction = actions.requestSuccess({
            url, body, status: response.status, entities: newEntities, meta, queryKey, responseBody: parsedResponse,
            responseText: response.body, responseHeaders: response.headers
          });
          this.store.dispatch(requestSuccessAction);
          const end = new Date();
          const duration = end.valueOf() - start.valueOf();
          const requestAsyncAction = {
            body: parsedResponse,
            duration,
            entities: newEntities,
            meta,
            status: response.status,
            text: response.body,
            transformed,
            type: actionTypes.REQUEST_ASYNC,
          };
          if (this.config && this.config.mock && this.config.mock.mode === MockMode.Record) {
            this.config.mock.saveMockData(queryKey, [requestSuccessAction, requestAsyncAction]);
          }
          return requestAsyncAction;
        }),
        retryWhen(attempts => {
          const backoff = this.config && this.config.backoff || defaultBackoffConfig;
          const retryableStatusCodes = this.config && this.config.retryableStatusCodes || defaultRetryableStatusCodes;
          return range(1, backoff.maxAttempts + 1).pipe(
            zip(attempts, (i, response) => ({ response, i })),
            flatMap(({ response, i }) => {
              if (i < backoff.maxAttempts && retryableStatusCodes.indexOf(response.status) >= 0) {
                // Delay retry by min duration the first attempt, up to max duration on the (maxAttempts)th attempt
                return timer(
                  backoff.minDuration +
                  (i - 1) * (backoff.maxDuration - backoff.minDuration) / backoff.maxAttempts,
                );
              } else {
                // Tried maxAttempts, now fail
                throw response;
              }
            })
          );
        }),
        catchError((errResponse: HttpErrorResponse, caught) => {
          if (errResponse.error instanceof Error) {
            throw errResponse.error;
          }
          const requestFailureAction = actions.requestFailure({
            url,
            body,
            status: errResponse.status,
            responseBody: errResponse.error,
            meta,
            queryKey,
            responseText: errResponse.error,
            responseHeaders: errResponse.headers
          });
          if (this.config && this.config.mock && this.config.mock.mode === MockMode.Record) {
            this.config.mock.saveMockData(queryKey, [requestFailureAction]);
          }
          return of(requestFailureAction);
        })
      );
    })
  );

  @Effect() public mutateAsync: Observable<any> = this.actions$.pipe(
    ofType(ngrxQueryActionTypes.MUTATE_ASYNC),
    map((action: MutateAsyncAction) => {
      const {
        url,
        transform = identity,
        update,
        body,
        meta,
        optimisticUpdate,
        options = <any>{},
      } = action;
      invariant(!!url, 'Missing required `url` field in action handler');

      const state = getLatest(this.store);
      const entities = this.config && this.config.entitiesSelector && this.config.entitiesSelector(state)
        || defaultEntitiesSelector(state);
      let optimisticEntities;
      if (optimisticUpdate) {
        optimisticEntities = optimisticUpdateEntities(optimisticUpdate, entities);
      }

      const queryKey = getQueryKey(action);
      // const start = new Date();
      const { method = httpMethods.POST } = options;
      const request = {
        body,
        headers: new HttpHeaders(options.headers),
        method,
        observe: (options.observe || 'response') as 'response',
        responseType: options.responseType,
        url,
        withCredentials: options.credentials === 'include',
      };

      // Note: only the entities that are included in `optimisticUpdate` will be passed along in the
      // `mutateStart` action as `optimisticEntities`
      this.store.dispatch(actions.mutateStart({url, body, request, optimisticEntities, queryKey, meta}));
      return { ...action, request, entities, queryKey };
    }),
    filter((action) => {
      if (!this.config || !this.config.mock || this.config.mock.mode !== MockMode.Mock) {
        // Not mocking so continue
        return true;
      }
      const {
        url,
        body,
        meta,
        queryKey,
      } = action;
      const mockActions = this.config.mock.getMockData(queryKey);
      if (mockActions) {
        mockActions.forEach(mockAction => {
          this.store.dispatch(mockAction);
        });
      } else {
        this.store.dispatch(actions.requestFailure({
          url,
          body,
          status: 500,
          responseBody: 'No mock data recorded for ' + queryKey,
          meta,
          queryKey,
        }));
      }
      // Dispatched mock actions so abort network call
      return false;
    }),
    mergeMap((action) => {
      const {
        url,
        transform = identity,
        update,
        body,
        meta,
        request,
        entities,
        queryKey,
      } = action;
      return this.http.request(request.method, url, request).pipe(
        map(response => {
          if (!response.ok) {
            throw response;
          }
          const status = (response && response.status) || 0;
          const responseBody = (response && response.body) || undefined;
          const responseText = (response && response.body) || undefined;

          const transformed = transform(responseBody, responseText, response);
          const newEntities = updateEntities(update, entities, transformed);
          return actions.mutateSuccess({
            url, body, status, entities: newEntities, queryKey, responseBody, responseText, responseHeaders: response.headers, meta
          });
        }),
        catchError((errResponse: HttpErrorResponse) => {
          if (errResponse.error instanceof Error) {
            throw errResponse.error;
          }
          return of(
            actions.mutateFailure({
              url, body, status: errResponse.status, rolledBackEntities: entities, queryKey,
              responseBody: errResponse.error, responseText: errResponse.error, responseHeaders: errResponse.headers, meta
            })
          );
        })
      );
    })
  );
  // @Effect() public cancelQuery: Observable<Action> = this.actions$;
  // @Effect() public reset: Observable<Action> = this.actions$;

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private http: HttpClient,
    @Inject(NGRX_QUERY_CONFIG) private config: NgrxQueryConfig,
  ) { }
}
