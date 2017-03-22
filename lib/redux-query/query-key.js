export var getQueryKey = function (url, body) {
    return JSON.stringify({ url: url, body: body });
};
export var reconcileQueryKey = function (_a) {
    var url = _a.url, body = _a.body, queryKey = _a.queryKey;
    if (queryKey !== null && queryKey !== undefined) {
        return queryKey;
    }
    else {
        return getQueryKey(url, body);
    }
};
//# sourceMappingURL=query-key.js.map