import { REQUEST_FAILURE } from './../redux-query/action-types';
import { REQUEST_ASYNC } from './../helpers/actionTypes';
import { MockServerService, SERVER_STATE } from './../../demo/mockServer';
import { NGRX_QUERY_CONFIG, defaultConfig } from './../helpers/config';
import { NgrxQueryModule } from './../ngrx-query';
import { StoreModule } from '@ngrx/store';
import { requestAsync } from './../helpers/actions';
import { NgrxQueryEffects } from './effects.service';
import { Injector } from '@angular/core';
import { async, fakeAsync, flushMicrotasks, getTestBed, inject, TestBed, tick } from '@angular/core/testing';
import { entitiesReducer, queriesReducer } from '../index';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import {Injectable, ReflectiveInjector} from '@angular/core';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {Response, ResponseOptions} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import * as actionTypes from '../redux-query/action-types';

export function httpFactory(backend, options): Http {
  return new Http(backend, options);
}

describe('NgrxQueryEffects', () => {
  let injector: Injector;
  let runner: EffectsRunner;
  let backend: MockBackend;
  let mockServer: MockServerService;
  let ngrxQueryEffects: NgrxQueryEffects;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule,
        StoreModule.provideStore({
          entities: entitiesReducer,
          queries: queriesReducer,
        }),
        // NgrxQueryModule.forRoot(),
        // EffectsModule.run(NgrxQueryEffects),
      ],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          deps: [MockBackend, BaseRequestOptions],
          provide: Http,
          useFactory: httpFactory,
        },
        NgrxQueryEffects,
        { provide: NGRX_QUERY_CONFIG, useValue: defaultConfig },
        MockServerService,
      ]
    });
    injector = getTestBed();
    runner = injector.get(EffectsRunner);
    backend = injector.get(MockBackend);
    mockServer = injector.get(MockServerService);
    backend.connections.subscribe(connection => mockServer.handleConnection(connection));
    ngrxQueryEffects = injector.get(NgrxQueryEffects);
    // console.log(`runner: `, runner);
    // console.log(`ngrxQueryEffects: `, ngrxQueryEffects);
  }));

  describe('requestAsync', () => {
    beforeEach(() => {
      runner.queue(requestAsync({
        update: {
        },
        url: '/api/rangers',
      }));
    });

    it('should successfully retrieve a list', () => {
      ngrxQueryEffects.requestAsync.subscribe(result => {
        expect(result.type).toEqual(actionTypes.REQUEST_ASYNC);
      });
      backend.resolveAllConnections();
    });
    it('should retry and fail if server busy', fakeAsync(() => {
      mockServer.state = SERVER_STATE.BUSY;
      ngrxQueryEffects.requestAsync.subscribe(result => {
        expect(result.type).toEqual(actionTypes.REQUEST_FAILURE);
      });
      backend.resolveAllConnections();
      tick(10000);
      // backend.resolveAllConnections();
    }));
    it('should retry if server busy and succeed if server comes back', fakeAsync(() => {
      mockServer.state = SERVER_STATE.BUSY;
      ngrxQueryEffects.requestAsync.subscribe(result => {
        expect(result.type).toEqual(actionTypes.REQUEST_ASYNC);
      });
      backend.resolveAllConnections();
      tick(5000);
      mockServer.state = SERVER_STATE.ON;
      tick(5000);
    }));
    it('should fail immediately if server errors', () => {
      mockServer.state = SERVER_STATE.ERROR;
      ngrxQueryEffects.requestAsync.subscribe(result => {
        expect(result.type).toEqual(actionTypes.REQUEST_FAILURE);
      });
      backend.resolveAllConnections();
    });
  });
});
