import { OpaqueToken } from '@angular/core';
export var statusCodes = {
    GATEWAY_TIMEOUT: 504,
    REQUEST_TIMEOUT: 408,
    SERVICE_UNAVAILABLE: 503,
    TOO_MANY_REQUESTS: 429,
    UNKNOWN: 0,
};
export var NGRX_QUERY_CONFIG = new OpaqueToken('NGRX_QUERY_CONFIG');
export var defaultEntitiesSelector = function (state) { return state.entities; };
export var defaultQueriesSelector = function (state) { return state.queries; };
export var defaultBackoffConfig = {
    maxAttempts: 5,
    maxDuration: 5000,
    minDuration: 300,
};
export var defaultRetryableStatusCodes = [
    statusCodes.UNKNOWN,
    statusCodes.REQUEST_TIMEOUT,
    statusCodes.TOO_MANY_REQUESTS,
    statusCodes.SERVICE_UNAVAILABLE,
    statusCodes.GATEWAY_TIMEOUT,
];
//# sourceMappingURL=config.js.map