import { NgrxQueryConfig, Selector } from '../helpers/ngrxQueryConfig';
import { mutateAsync, MutateParams, requestAsync, RequestParams } from '../helpers/actions';
import { defaultEntitiesSelector, NGRX_QUERY_CONFIG } from '../helpers/config';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export interface ConnectRequestParams extends RequestParams {
  selector?: Selector;
}
export interface ConnectMutateParams extends MutateParams {
  selector?: Selector;
}

@Injectable()
export class ConnectService {
  constructor(private store: Store<any>, @Inject(NGRX_QUERY_CONFIG) private config: NgrxQueryConfig) { }

  public mutateAsync(config: ConnectMutateParams): Observable<any> {
    this.store.dispatch(mutateAsync(config));
    return this.select(config.selector);
  }

  public requestAsync(config: ConnectRequestParams): Observable<any> {
    this.store.dispatch(requestAsync(config));
    return this.select(config.selector);
  }

  public select(selector: Selector): Observable<any> {
    return this.store.select(selector || this.config.entitiesSelector || defaultEntitiesSelector);
  }
}
