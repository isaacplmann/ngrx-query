import { OpaqueToken } from '@angular/core';

export const statusCodes = {
  GATEWAY_TIMEOUT: 504,
  REQUEST_TIMEOUT: 408, // client took too long
  SERVICE_UNAVAILABLE: 503,
  TOO_MANY_REQUESTS: 429,
  UNKNOWN: 0,
};

export type Selector = (state: any) => any;
export interface BackoffConfig {
  maxAttempts: number;
  maxDuration: number;
  minDuration: number;
};
export interface NgrxQueryConfig {
  queriesSelector?: Selector;
  entitiesSelector?: Selector;
  backoff: BackoffConfig;
  retryableStatusCodes: number[];
};
export const NGRX_QUERY_CONFIG = new OpaqueToken('NGRX_QUERY_CONFIG');

export const defaultEntitiesSelector = state => state.entities;
export const defaultQueriesSelector = state => state.queries;

export const defaultConfig: NgrxQueryConfig = {
  backoff: {
    maxAttempts: 5,
    maxDuration: 5000,
    minDuration: 300,
  },
  retryableStatusCodes: [
    statusCodes.UNKNOWN, // normally means a failed connection
    statusCodes.REQUEST_TIMEOUT,
    statusCodes.TOO_MANY_REQUESTS, // hopefully backoff stops this getting worse
    statusCodes.SERVICE_UNAVAILABLE,
    statusCodes.GATEWAY_TIMEOUT,
  ],
};
