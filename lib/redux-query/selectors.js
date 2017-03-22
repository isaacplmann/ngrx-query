// import get from 'lodash.get';
import { reconcileQueryKey } from './query-key';
export var isFinished = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }
    return queriesState[queryKey].isFinished;
}; };
export var isPending = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }
    return queriesState[queryKey].isPending;
}; };
export var status = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }
    return queriesState[queryKey].status;
}; };
export var lastUpdated = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }
    return queriesState[queryKey].lastUpdated;
}; };
export var queryCount = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }
    return queriesState[queryKey].queryCount;
}; };
//# sourceMappingURL=selectors.js.map