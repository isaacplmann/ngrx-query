import { OpaqueToken } from '@angular/core';
export declare const statusCodes: {
    GATEWAY_TIMEOUT: number;
    REQUEST_TIMEOUT: number;
    SERVICE_UNAVAILABLE: number;
    TOO_MANY_REQUESTS: number;
    UNKNOWN: number;
};
export declare const NGRX_QUERY_CONFIG: OpaqueToken;
export declare const defaultEntitiesSelector: (state: any) => any;
export declare const defaultQueriesSelector: (state: any) => any;
export declare const defaultBackoffConfig: {
    maxAttempts: number;
    maxDuration: number;
    minDuration: number;
};
export declare const defaultRetryableStatusCodes: number[];
