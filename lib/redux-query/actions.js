import * as actionTypes from './action-types';
export var requestStart = function (url, body, request, meta, queryKey) {
    return {
        type: actionTypes.REQUEST_START,
        url: url,
        body: body,
        request: request,
        meta: meta,
        queryKey: queryKey,
    };
};
export var requestSuccess = function (url, body, status, entities, meta, queryKey) {
    return {
        type: actionTypes.REQUEST_SUCCESS,
        url: url,
        body: body,
        status: status,
        entities: entities,
        meta: meta,
        queryKey: queryKey,
        time: Date.now(),
    };
};
export var requestFailure = function (url, body, status, responseBody, meta, queryKey) {
    return {
        type: actionTypes.REQUEST_FAILURE,
        url: url,
        body: body,
        status: status,
        responseBody: responseBody,
        meta: meta,
        queryKey: queryKey,
        time: Date.now(),
    };
};
export var mutateStart = function (url, body, request, optimisticEntities, queryKey) {
    return {
        type: actionTypes.MUTATE_START,
        url: url,
        body: body,
        request: request,
        optimisticEntities: optimisticEntities,
        queryKey: queryKey,
    };
};
export var mutateSuccess = function (url, body, status, entities, queryKey) {
    return {
        type: actionTypes.MUTATE_SUCCESS,
        url: url,
        body: body,
        status: status,
        entities: entities,
        queryKey: queryKey,
        time: Date.now(),
    };
};
export var mutateFailure = function (url, body, status, originalEntities, queryKey) {
    return {
        type: actionTypes.MUTATE_FAILURE,
        url: url,
        body: body,
        status: status,
        originalEntities: originalEntities,
        queryKey: queryKey,
        time: Date.now(),
    };
};
export var requestAsync = function (_a) {
    var body = _a.body, force = _a.force, queryKey = _a.queryKey, meta = _a.meta, options = _a.options, retry = _a.retry, transform = _a.transform, update = _a.update, url = _a.url;
    return {
        type: actionTypes.REQUEST_ASYNC,
        body: body,
        force: force,
        queryKey: queryKey,
        meta: meta,
        options: options,
        retry: retry,
        transform: transform,
        update: update,
        url: url,
    };
};
export var mutateAsync = function (_a) {
    var body = _a.body, optimisticUpdate = _a.optimisticUpdate, options = _a.options, queryKey = _a.queryKey, transform = _a.transform, update = _a.update, url = _a.url;
    return {
        type: actionTypes.MUTATE_ASYNC,
        body: body,
        optimisticUpdate: optimisticUpdate,
        options: options,
        queryKey: queryKey,
        transform: transform,
        update: update,
        url: url,
    };
};
export var cancelQuery = function (queryKey) {
    return {
        type: actionTypes.CANCEL_QUERY,
        queryKey: queryKey,
    };
};
export var removeEntity = function (path) {
    return {
        type: actionTypes.REMOVE_ENTITY,
        path: path,
    };
};
export var removeEntities = function (paths) {
    return {
        type: actionTypes.REMOVE_ENTITIES,
        paths: paths,
    };
};
//# sourceMappingURL=actions.js.map