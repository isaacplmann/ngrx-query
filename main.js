(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngrx-query/fesm5/ngrx-query.js":
/*!*********************************************!*\
  !*** ./dist/ngrx-query/fesm5/ngrx-query.js ***!
  \*********************************************/
/*! exports provided: entitiesReducer, queriesReducer, queryCount, lastUpdated, status, isPending, isFinished, NgrxQueryModule, NgrxQueryEffects, ConnectService, ConnectEntityService, arrayToObjectsById, objectsByIdToArray, ConnectRequestDirective, NqConnectedComponent, provideNqConnectedComponent, NGRX_QUERY_CONFIG, requestAsync, mutateAsync, MockMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxQueryModule", function() { return NgrxQueryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxQueryEffects", function() { return NgrxQueryEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectEntityService", function() { return ConnectEntityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToObjectsById", function() { return arrayToObjectsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsByIdToArray", function() { return objectsByIdToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectRequestDirective", function() { return ConnectRequestDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NqConnectedComponent", function() { return NqConnectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideNqConnectedComponent", function() { return provideNqConnectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGRX_QUERY_CONFIG", function() { return NGRX_QUERY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAsync", function() { return requestAsync$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutateAsync", function() { return mutateAsync$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMode", function() { return MockMode; });
/* harmony import */ var redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-query/dist/es/actions */ "./node_modules/redux-query/dist/es/actions/index.js");
/* harmony import */ var redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var redux_query_dist_es_reducers_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-query/dist/es/reducers/entities */ "./node_modules/redux-query/dist/es/reducers/entities.js");
/* harmony import */ var redux_query_dist_es_reducers_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_query_dist_es_reducers_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "entitiesReducer", function() { return redux_query_dist_es_reducers_entities__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var redux_query_dist_es_constants_action_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-query/dist/es/constants/action-types */ "./node_modules/redux-query/dist/es/constants/action-types.js");
/* harmony import */ var redux_query_dist_es_constants_action_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_query_dist_es_constants_action_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_query_dist_es_constants_http_methods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-query/dist/es/constants/http-methods */ "./node_modules/redux-query/dist/es/constants/http-methods.js");
/* harmony import */ var redux_query_dist_es_constants_http_methods__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_query_dist_es_constants_http_methods__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_query_dist_es_lib_query_key__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-query/dist/es/lib/query-key */ "./node_modules/redux-query/dist/es/lib/query-key.js");
/* harmony import */ var redux_query_dist_es_lib_query_key__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_query_dist_es_lib_query_key__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var redux_query_dist_es_reducers_queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-query/dist/es/reducers/queries */ "./node_modules/redux-query/dist/es/reducers/queries.js");
/* harmony import */ var redux_query_dist_es_reducers_queries__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux_query_dist_es_reducers_queries__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "queriesReducer", function() { return redux_query_dist_es_reducers_queries__WEBPACK_IMPORTED_MODULE_12___default.a; });
/* harmony import */ var redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-query/dist/es/selectors/query */ "./node_modules/redux-query/dist/es/selectors/query.js");
/* harmony import */ var redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryCount", function() { return redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13__["queryCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastUpdated", function() { return redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13__["lastUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "status", function() { return redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13__["status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13__["isPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinished", function() { return redux_query_dist_es_selectors_query__WEBPACK_IMPORTED_MODULE_13__["isFinished"]; });

















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ REQUEST_ASYNC$1 = '[ngrx-query] REQUEST_ASYNC';
var /** @type {?} */ MUTATE_ASYNC = '[ngrx-query] MUTATE_ASYNC';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ requestAsync$1 = function (params) { return Object.assign({}, Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["requestAsync"])(params), { type: REQUEST_ASYNC$1 }); };
var /** @type {?} */ mutateAsync$1 = function (params) { return Object.assign({}, Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["mutateAsync"])(params), { type: MUTATE_ASYNC }); };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ statusCodes = {
    GATEWAY_TIMEOUT: 504,
    REQUEST_TIMEOUT: 408,
    // client took too long
    SERVICE_UNAVAILABLE: 503,
    TOO_MANY_REQUESTS: 429,
    UNKNOWN: 0,
};
var /** @type {?} */ NGRX_QUERY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NGRX_QUERY_CONFIG');
var /** @type {?} */ defaultEntitiesSelector = function (state) { return state.entities; };
var /** @type {?} */ defaultQueriesSelector = function (state) { return state.queries; };
var /** @type {?} */ defaultBackoffConfig = {
    maxAttempts: 5,
    maxDuration: 5000,
    minDuration: 300,
};
var /** @type {?} */ defaultRetryableStatusCodes = [
    statusCodes.UNKNOWN,
    // normally means a failed connection
    statusCodes.REQUEST_TIMEOUT,
    statusCodes.TOO_MANY_REQUESTS,
    // hopefully backoff stops this getting worse
    statusCodes.SERVICE_UNAVAILABLE,
    statusCodes.GATEWAY_TIMEOUT,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConnectService = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} config
     */
    function ConnectService(store, config) {
        this.store = store;
        this.config = config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ConnectService.prototype.mutateAsync = function (config) {
        this.store.dispatch(mutateAsync$1(config));
        return this.select(config.selector);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    ConnectService.prototype.requestAsync = function (config) {
        this.store.dispatch(requestAsync$1(config));
        return this.select(config.selector);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    ConnectService.prototype.select = function (selector) {
        return this.store.select(selector || this.config && this.config.entitiesSelector || defaultEntitiesSelector);
    };
    return ConnectService;
}());
ConnectService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
ConnectService.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NGRX_QUERY_CONFIG,] },] },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var NqConnectedComponent = /** @class */ (function () {
    function NqConnectedComponent() {
    }
    return NqConnectedComponent;
}());
/**
 * @param {?} component
 * @param {?=} parentType
 * @return {?}
 */
function provideNqConnectedComponent(component, parentType) {
    return { provide: parentType || NqConnectedComponent, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return component; }) };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConnectRequestDirective = /** @class */ (function () {
    /**
     * @param {?} connectService
     * @param {?} changeDetector
     * @param {?} host
     */
    function ConnectRequestDirective(connectService, changeDetector, host) {
        this.connectService = connectService;
        this.changeDetector = changeDetector;
        this.host = host;
        // tslint:disable-next-line:no-input-rename
        this.config = /** @type {?} */ (undefined);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ConnectRequestDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe(this.config);
        if (this.host) {
            this.host.nqRefresh.subscribe(function () { return _this.forceRequest(); });
        }
    };
    /**
     * @return {?}
     */
    ConnectRequestDirective.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    ConnectRequestDirective.prototype.subscribe = function (config) {
        var _this = this;
        this.unsubscribe();
        this.subscription = this.connectService.requestAsync(config).subscribe(function (response) {
            if (_this.response) {
                if (_this.host) {
                    setTimeout(function () {
                        _this.host.nqData = response;
                        if (_this.host.changeDetector) {
                            _this.host.changeDetector.markForCheck();
                        }
                    });
                }
                _this.response.emit(response);
            }
        });
    };
    /**
     * @return {?}
     */
    ConnectRequestDirective.prototype.unsubscribe = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    ConnectRequestDirective.prototype.forceRequest = function () {
        this.subscribe(Object.assign({}, this.config, { force: true }));
    };
    return ConnectRequestDirective;
}());
ConnectRequestDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                exportAs: 'nqConnect',
                selector: '[nqConnect]',
            },] },
];
/** @nocollapse */
ConnectRequestDirective.ctorParameters = function () { return [
    { type: ConnectService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    { type: NqConnectedComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
]; };
ConnectRequestDirective.propDecorators = {
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nqConnect',] },],
    "response": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function objectsByIdToArray(obj) {
    if (!obj) {
        return [];
    }
    return Object.keys(obj).map(function (key) { return obj[key]; });
}
/**
 * @param {?} array
 * @param {?} keyOf
 * @return {?}
 */
function arrayToObjectsById(array, keyOf) {
    return array.reduce(function (objectsById, item) {
        objectsById[keyOf(item)] = item;
        return objectsById;
    }, {});
}
/**
 * @template E
 */
var ConnectEntityService = /** @class */ (function () {
    /**
     * @param {?} connectService
     */
    function ConnectEntityService(connectService) {
        this.connectService = connectService;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ConnectEntityService.prototype.init = function (config) {
        this.config = config;
    };
    /**
     * @return {?}
     */
    ConnectEntityService.prototype.list = function () {
        var _this = this;
        return this.connectService.requestAsync({
            selector: function (s) { return objectsByIdToArray(s.entities[_this.config.entityTypeName]); },
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = arrayToObjectsById(response, _this.config.idSelector), _a);
                var _a;
            },
            update: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities, entities) { return (Object.assign({}, prevEntities, entities)); },
                _a),
            url: this.config.endpoints.list,
        });
        var _a;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ConnectEntityService.prototype.get = function (id) {
        var _this = this;
        return this.connectService.requestAsync({
            selector: function (s) { return s.entities[_this.config.entityTypeName] && s.entities[_this.config.entityTypeName][id]; },
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = (_b = {}, _b[id] = response, _b), _a);
                var _a, _b;
            },
            update: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities, entities) { return (Object.assign({}, prevEntities, entities)); },
                _a),
            url: this.config.endpoints.getById(id),
        });
        var _a;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ConnectEntityService.prototype.create = function (entity) {
        var _this = this;
        return this.connectService.mutateAsync({
            body: entity,
            optimisticUpdate: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities) {
                    return (Object.assign({}, prevEntities, (_a = {}, _a[_this.config.idSelector(entity)] = entity, _a)));
                    var _a;
                },
                _a),
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = (_b = {}, _b[_this.config.idSelector(response)] = response, _b), _a);
                var _a, _b;
            },
            update: (_b = {},
                _b[this.config.entityTypeName] = function (prevEntities, entities) { return (Object.assign({}, prevEntities, entities)); },
                _b),
            url: this.config.endpoints.create,
        });
        var _a, _b;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ConnectEntityService.prototype.edit = function (entity) {
        var _this = this;
        return this.connectService.mutateAsync({
            body: entity,
            optimisticUpdate: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities) {
                    return (Object.assign({}, prevEntities, (_a = {}, _a[_this.config.idSelector(entity)] = entity, _a)));
                    var _a;
                },
                _a),
            options: {
                method: 'PUT',
            },
            selector: function (s) { return s.entities[_this.config.entityTypeName][_this.config.idSelector(entity)]; },
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = (_b = {}, _b[_this.config.idSelector(response)] = response, _b), _a);
                var _a, _b;
            },
            update: (_b = {},
                _b[this.config.entityTypeName] = function (prevEntities, entities) { return (Object.assign({}, prevEntities, entities)); },
                _b),
            url: this.config.endpoints.update,
        });
        var _a, _b;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ConnectEntityService.prototype.delete = function (id) {
        var _this = this;
        return this.connectService.mutateAsync({
            selector: function (s) { return s.entities[_this.config.entityTypeName][id]; },
            optimisticUpdate: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities) { return Object(redux_query_dist_es_reducers_entities__WEBPACK_IMPORTED_MODULE_3__["withoutPath"])(prevEntities, [id]); },
                _a),
            options: {
                method: 'DELETE',
            },
            update: (_b = {},
                _b[this.config.entityTypeName] = function (prevEntities) { return Object(redux_query_dist_es_reducers_entities__WEBPACK_IMPORTED_MODULE_3__["withoutPath"])(prevEntities, [id]); },
                _b),
            url: this.config.endpoints.remove(id + ''),
        });
        var _a, _b;
    };
    return ConnectEntityService;
}());
ConnectEntityService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
ConnectEntityService.ctorParameters = function () { return [
    { type: ConnectService, },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 * @param {?} o$
 * @return {?}
 */
function getLatest(o$) {
    var /** @type {?} */ result;
    o$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (x) { return result = x; });
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} condition
 * @param {?} message
 * @param {?=} context
 * @return {?}
 */
function invariant(condition, message, context) {
    if (!condition) {
        var /** @type {?} */ errorMessage = message;
        if (context) {
            errorMessage = (message.indexOf('%s') !== -1) ?
                message.replace('%s', context) :
                errorMessage = message + ": " + context;
        }
        throw new Error(errorMessage);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var MockMode = {
    None: 0,
    Record: 1,
    Mock: 2,
};
MockMode[MockMode.None] = "None";
MockMode[MockMode.Record] = "Record";
MockMode[MockMode.Mock] = "Mock";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ofType = function (actionType) { return function (source) { return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (action) { return action.type === actionType; })); }; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} x
 * @param {?=} y
 * @param {?=} z
 * @return {?}
 */
function identity(x, y, z) {
    return x;
}
/**
 * @param {?} optimisticUpdate
 * @param {?} entities
 * @return {?}
 */
function optimisticUpdateEntities(optimisticUpdate, entities) {
    return Object.keys(optimisticUpdate).reduce(function (accum, key) {
        if (optimisticUpdate[key]) {
            accum[key] = optimisticUpdate[key](entities[key]);
        }
        else {
            accum[key] = entities[key];
        }
        return accum;
    }, {});
}
/**
 * @param {?} update
 * @param {?} entities
 * @param {?} transformed
 * @return {?}
 */
function updateEntities(update, entities, transformed) {
    // If update not supplied, then no change to entities should be made
    return Object.keys(update || {}).reduce(function (accum, key) {
        accum[key] = update[key]((entities || {})[key], (transformed || {})[key]);
        return accum;
    }, {});
}
var NgrxQueryEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} store
     * @param {?} http
     * @param {?} config
     */
    function NgrxQueryEffects(actions$, store, http, config) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.http = http;
        this.config = config;
        this.requestAsync = this.actions$.pipe(ofType(REQUEST_ASYNC$1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
            var url = action.url, force = action.force, retry = action.retry, update = action.update;
            invariant(!!url, 'Missing required `url` field in action handler');
            invariant(!!update, 'Missing required `update` field in action handler');
            var /** @type {?} */ queryKey = Object(redux_query_dist_es_lib_query_key__WEBPACK_IMPORTED_MODULE_10__["getQueryKey"])(action);
            var /** @type {?} */ state = getLatest(_this.store);
            var /** @type {?} */ queries = _this.config && _this.config.queriesSelector && _this.config.queriesSelector(state)
                || defaultQueriesSelector(state);
            var /** @type {?} */ queriesState = queries[queryKey];
            var _a = queriesState || /** @type {?} */ ({}), isPending = _a.isPending, status = _a.status;
            var /** @type {?} */ hasSucceeded = status >= 200 && status < 300;
            var /** @type {?} */ attemptRequest = force || !queriesState || (retry !== false && !isPending && !hasSucceeded);
            return { attemptRequest: attemptRequest, action: action };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
            var attemptRequest = _a.attemptRequest;
            return attemptRequest;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (_a) {
            var action = _a.action;
            var url = action.url, body = action.body, _b = action.transform, transform = _b === void 0 ? identity : _b, update = action.update, _c = action.options, options = _c === void 0 ? ({}) : _c, meta = action.meta;
            var /** @type {?} */ queryKey = Object(redux_query_dist_es_lib_query_key__WEBPACK_IMPORTED_MODULE_10__["getQueryKey"])(action);
            var /** @type {?} */ start = new Date();
            var _d = options.method, method = _d === void 0 ? redux_query_dist_es_constants_http_methods__WEBPACK_IMPORTED_MODULE_9__["GET"] : _d;
            var /** @type {?} */ request = {
                body: body,
                headers: options.headers,
                method: method,
                observe: /** @type {?} */ ((options.observe || 'response')),
                responseType: options.responseType,
                url: url,
                withCredentials: options.credentials === 'include',
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                _this.store.dispatch(Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["requestStart"])({ url: url, body: body, request: request, meta: meta, queryKey: queryKey }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
                if (_this.config && _this.config.mock && _this.config.mock.mode === MockMode.Mock) {
                    var /** @type {?} */ mockActions = _this.config.mock.getMockData(queryKey);
                    if (mockActions) {
                        mockActions.forEach(function (mockAction) {
                            _this.store.dispatch(mockAction);
                        });
                    }
                    else {
                        _this.store.dispatch(Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["requestFailure"])({
                            url: url,
                            body: body,
                            status: 500,
                            responseBody: 'No mock data recorded for ' + queryKey,
                            meta: meta,
                            queryKey: queryKey,
                        }));
                    }
                    return false;
                }
                return true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
                return _this.http.request(request.method, url, request)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                    if (!response.ok) {
                        throw response;
                    }
                    return response;
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                var /** @type {?} */ callbackState = getLatest(_this.store);
                var /** @type {?} */ entities = _this.config && _this.config.entitiesSelector && _this.config.entitiesSelector(callbackState)
                    || defaultEntitiesSelector(callbackState);
                var /** @type {?} */ parsedResponse = response.body;
                var /** @type {?} */ transformed = transform(parsedResponse, response.body, response);
                var /** @type {?} */ newEntities = updateEntities(update, entities, transformed);
                var /** @type {?} */ requestSuccessAction = Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["requestSuccess"])({
                    url: url, body: body, status: response.status, entities: newEntities, meta: meta, queryKey: queryKey, responseBody: parsedResponse,
                    responseText: response.body, responseHeaders: response.headers
                });
                _this.store.dispatch(requestSuccessAction);
                var /** @type {?} */ end = new Date();
                var /** @type {?} */ duration = end.valueOf() - start.valueOf();
                var /** @type {?} */ requestAsyncAction = {
                    body: parsedResponse,
                    duration: duration,
                    entities: newEntities,
                    meta: meta,
                    status: response.status,
                    text: response.body,
                    transformed: transformed,
                    type: redux_query_dist_es_constants_action_types__WEBPACK_IMPORTED_MODULE_8__["REQUEST_ASYNC"],
                };
                if (_this.config && _this.config.mock && _this.config.mock.mode === MockMode.Record) {
                    _this.config.mock.saveMockData(queryKey, [requestSuccessAction, requestAsyncAction]);
                }
                return requestAsyncAction;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(function (attempts) {
                var /** @type {?} */ backoff = _this.config && _this.config.backoff || defaultBackoffConfig;
                var /** @type {?} */ retryableStatusCodes = _this.config && _this.config.retryableStatusCodes || defaultRetryableStatusCodes;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["range"])(1, backoff.maxAttempts + 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["zip"])(attempts, function (i, response) { return ({ response: response, i: i }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (_a) {
                    var response = _a.response, i = _a.i;
                    if (i < backoff.maxAttempts && retryableStatusCodes.indexOf(response.status) >= 0) {
                        // Delay retry by min duration the first attempt, up to max duration on the (maxAttempts)th attempt
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(backoff.minDuration +
                            (i - 1) * (backoff.maxDuration - backoff.minDuration) / backoff.maxAttempts);
                    }
                    else {
                        // Tried maxAttempts, now fail
                        throw response;
                    }
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errResponse, caught) {
                if (errResponse.error instanceof Error) {
                    throw errResponse.error;
                }
                var /** @type {?} */ requestFailureAction = Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["requestFailure"])({
                    url: url,
                    body: body,
                    status: errResponse.status,
                    responseBody: errResponse.error,
                    meta: meta,
                    queryKey: queryKey,
                    responseText: errResponse.error,
                    responseHeaders: errResponse.headers
                });
                if (_this.config && _this.config.mock && _this.config.mock.mode === MockMode.Record) {
                    _this.config.mock.saveMockData(queryKey, [requestFailureAction]);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(requestFailureAction);
            }));
        }));
        this.mutateAsync = this.actions$.pipe(ofType(MUTATE_ASYNC), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
            var url = action.url, _a = action.transform, update = action.update, body = action.body, meta = action.meta, optimisticUpdate = action.optimisticUpdate, _b = action.options, options = _b === void 0 ? ({}) : _b;
            invariant(!!url, 'Missing required `url` field in action handler');
            var /** @type {?} */ state = getLatest(_this.store);
            var /** @type {?} */ entities = _this.config && _this.config.entitiesSelector && _this.config.entitiesSelector(state)
                || defaultEntitiesSelector(state);
            var /** @type {?} */ optimisticEntities;
            if (optimisticUpdate) {
                optimisticEntities = optimisticUpdateEntities(optimisticUpdate, entities);
            }
            var /** @type {?} */ queryKey = Object(redux_query_dist_es_lib_query_key__WEBPACK_IMPORTED_MODULE_10__["getQueryKey"])(action);
            // const start = new Date();
            var _c = options.method, method = _c === void 0 ? redux_query_dist_es_constants_http_methods__WEBPACK_IMPORTED_MODULE_9__["POST"] : _c;
            var /** @type {?} */ request = {
                body: body,
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"](options.headers),
                method: method,
                observe: /** @type {?} */ ((options.observe || 'response')),
                responseType: options.responseType,
                url: url,
                withCredentials: options.credentials === 'include',
            };
            // Note: only the entities that are included in `optimisticUpdate` will be passed along in the
            // `mutateStart` action as `optimisticEntities`
            _this.store.dispatch(Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["mutateStart"])({ url: url, body: body, request: request, optimisticEntities: optimisticEntities, queryKey: queryKey, meta: meta }));
            return Object.assign({}, action, { request: request, entities: entities, queryKey: queryKey });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (action) {
            if (!_this.config || !_this.config.mock || _this.config.mock.mode !== MockMode.Mock) {
                // Not mocking so continue
                return true;
            }
            var url = action.url, body = action.body, meta = action.meta, queryKey = action.queryKey;
            var /** @type {?} */ mockActions = _this.config.mock.getMockData(queryKey);
            if (mockActions) {
                mockActions.forEach(function (mockAction) {
                    _this.store.dispatch(mockAction);
                });
            }
            else {
                _this.store.dispatch(Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["requestFailure"])({
                    url: url,
                    body: body,
                    status: 500,
                    responseBody: 'No mock data recorded for ' + queryKey,
                    meta: meta,
                    queryKey: queryKey,
                }));
            }
            // Dispatched mock actions so abort network call
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            var url = action.url, _a = action.transform, transform = _a === void 0 ? identity : _a, update = action.update, body = action.body, meta = action.meta, request = action.request, entities = action.entities, queryKey = action.queryKey;
            return _this.http.request(request.method, url, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                if (!response.ok) {
                    throw response;
                }
                var /** @type {?} */ status = (response && response.status) || 0;
                var /** @type {?} */ responseBody = (response && response.body) || undefined;
                var /** @type {?} */ responseText = (response && response.body) || undefined;
                var /** @type {?} */ transformed = transform(responseBody, responseText, response);
                var /** @type {?} */ newEntities = updateEntities(update, entities, transformed);
                return Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["mutateSuccess"])({
                    url: url, body: body, status: status, entities: newEntities, queryKey: queryKey, responseBody: responseBody, responseText: responseText, responseHeaders: response.headers, meta: meta
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errResponse) {
                if (errResponse.error instanceof Error) {
                    throw errResponse.error;
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(Object(redux_query_dist_es_actions__WEBPACK_IMPORTED_MODULE_0__["mutateFailure"])({
                    url: url, body: body, status: errResponse.status, rolledBackEntities: entities, queryKey: queryKey,
                    responseBody: errResponse.error, responseText: errResponse.error, responseHeaders: errResponse.headers, meta: meta
                }));
            }));
        }));
    }
    return NgrxQueryEffects;
}());
NgrxQueryEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
NgrxQueryEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Actions"], },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NGRX_QUERY_CONFIG,] },] },
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"])
], NgrxQueryEffects.prototype, "requestAsync", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"])
], NgrxQueryEffects.prototype, "mutateAsync", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgrxQueryModule = /** @class */ (function () {
    function NgrxQueryModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgrxQueryModule.forRoot = function (config) {
        return {
            ngModule: NgrxQueryModule,
            providers: [
                { provide: NGRX_QUERY_CONFIG, useValue: config },
                ConnectService,
                ConnectEntityService,
            ],
        };
    };
    return NgrxQueryModule;
}());
NgrxQueryModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    ConnectRequestDirective,
                ],
                exports: [
                    ConnectRequestDirective,
                ],
                imports: [
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([NgrxQueryEffects]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngrx-query.js.map


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/demo/app.component.html":
/*!*************************************!*\
  !*** ./src/demo/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1 class=\"title\">Ngrx Query</h1>\n</header>\n<aside>\n  <nq-queries-list></nq-queries-list>\n</aside>\n<main>\n  <h3>Server Status</h3>\n  <label>\n    <input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.ON\">On</label>\n  <br>\n  <label>\n    <input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.BUSY\">Busy</label>\n  <br>\n  <label>\n    <input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.ERROR\">Error</label>\n  <br>\n\n  <p>Open the console to see the fake server calls (using MockBackend).</p>\n\n  <h3>Connected Element/Component</h3>\n  <label for=\"isShown\">Show List?</label>\n  <input id=\"isShown\" type=\"checkbox\" [(ngModel)]=\"isShown\">\n  <nq-ranger-list *ngIf=\"isShown\" rangerListData></nq-ranger-list>\n</main>\n<footer>\n  <a href=\"https://github.com/isaacplmann/ngrx-query\">Ngrx Query</a>\n</footer>\n"

/***/ }),

/***/ "./src/demo/app.component.scss":
/*!*************************************!*\
  !*** ./src/demo/app.component.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-family: sans-serif; }\n\nmain {\n  padding: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block; }\n\naside {\n  float: right;\n  width: 300px; }\n\nfooter {\n  text-align: center;\n  font-size: 0.8em;\n  width: 100%;\n  position: absolute;\n  bottom: 20px; }\n\nfooter a {\n  text-decoration: none;\n  font-family: sans-serif; }\n\nfooter a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./src/demo/app.component.ts":
/*!***********************************!*\
  !*** ./src/demo/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");
/* harmony import */ var _mockServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockServer */ "./src/demo/mockServer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(connectService, mockServer) {
        this.connectService = connectService;
        this.mockServer = mockServer;
        this.serverState = _mockServer__WEBPACK_IMPORTED_MODULE_1__["SERVER_STATE"];
    }
    AppComponent.prototype.log = function (message) {
        console.log(message);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            selector: 'nq-demo',
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/demo/app.component.scss")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/demo/app.component.html"),
        }),
        __metadata("design:paramtypes", [ngrx_query__WEBPACK_IMPORTED_MODULE_0__["ConnectService"], _mockServer__WEBPACK_IMPORTED_MODULE_1__["MockServerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/demo/app.module.ts":
/*!********************************!*\
  !*** ./src/demo/app.module.ts ***!
  \********************************/
/*! exports provided: saveMockData, getMockData, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMockData", function() { return saveMockData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMockData", function() { return getMockData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/demo/app.component.ts");
/* harmony import */ var _mockServer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mockServer */ "./src/demo/mockServer.ts");
/* harmony import */ var _networkLogger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./networkLogger.service */ "./src/demo/networkLogger.service.ts");
/* harmony import */ var _queriesList_queries_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./queriesList/queries-list.component */ "./src/demo/queriesList/queries-list.component.ts");
/* harmony import */ var _ranger_ranger_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ranger/ranger-detail.component */ "./src/demo/ranger/ranger-detail.component.ts");
/* harmony import */ var _ranger_ranger_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ranger/ranger-list.component */ "./src/demo/ranger/ranger-list.component.ts");
/* harmony import */ var _ranger_ranger_list_data_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ranger/ranger-list.data.directive */ "./src/demo/ranger/ranger-list.data.directive.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selectors */ "./src/demo/selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















function saveMockData(queryKey, actions) {
    return window.localStorage.setItem('mockApi-' + queryKey, JSON.stringify(actions));
}
function getMockData(queryKey) {
    return JSON.parse(window.localStorage.getItem('mockApi-' + queryKey));
}
var AppModule = /** @class */ (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _queriesList_queries_list_component__WEBPACK_IMPORTED_MODULE_12__["QueriesListComponent"],
                _ranger_ranger_list_component__WEBPACK_IMPORTED_MODULE_14__["RangerListComponent"],
                _ranger_ranger_detail_component__WEBPACK_IMPORTED_MODULE_13__["RangerDetailComponent"],
                _ranger_ranger_list_data_directive__WEBPACK_IMPORTED_MODULE_15__["RangerListDataDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                    entities1: ngrx_query__WEBPACK_IMPORTED_MODULE_8__["entitiesReducer"],
                    queries1: ngrx_query__WEBPACK_IMPORTED_MODULE_8__["queriesReducer"],
                }),
                ngrx_query__WEBPACK_IMPORTED_MODULE_8__["NgrxQueryModule"].forRoot({
                    entitiesSelector: _selectors__WEBPACK_IMPORTED_MODULE_16__["entitiesSelector"],
                    queriesSelector: _selectors__WEBPACK_IMPORTED_MODULE_16__["queriesSelector"],
                    mock: {
                        mode: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].mockMode,
                        saveMockData: saveMockData,
                        getMockData: getMockData,
                    },
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument(),
            ],
            providers: [
                _mockServer__WEBPACK_IMPORTED_MODULE_10__["MockServerService"],
                _networkLogger_service__WEBPACK_IMPORTED_MODULE_11__["NetworkLoggerService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _networkLogger_service__WEBPACK_IMPORTED_MODULE_11__["NetworkLoggerService"],
                    multi: true,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useExisting: _mockServer__WEBPACK_IMPORTED_MODULE_10__["MockServerService"],
                    multi: true,
                },
            ],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/demo/mockServer.ts":
/*!********************************!*\
  !*** ./src/demo/mockServer.ts ***!
  \********************************/
/*! exports provided: RequestMethod, SERVER_STATE, defaultRangers, MockServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_STATE", function() { return SERVER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRangers", function() { return defaultRangers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockServerService", function() { return MockServerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestMethod;
(function (RequestMethod) {
    RequestMethod["Get"] = "GET";
    RequestMethod["Post"] = "POST";
    RequestMethod["Put"] = "PUT";
    RequestMethod["Delete"] = "DELETE";
})(RequestMethod || (RequestMethod = {}));
var SERVER_STATE;
(function (SERVER_STATE) {
    SERVER_STATE[SERVER_STATE["ON"] = 0] = "ON";
    SERVER_STATE[SERVER_STATE["BUSY"] = 1] = "BUSY";
    SERVER_STATE[SERVER_STATE["ERROR"] = 2] = "ERROR";
    SERVER_STATE[SERVER_STATE["UNAUTHORIZED"] = 3] = "UNAUTHORIZED";
})(SERVER_STATE || (SERVER_STATE = {}));
var defaultRangers = [
    {
        id: 0,
        name: 'Jason',
        color: 'red',
    },
    {
        id: 1,
        name: 'Zack',
        color: 'black',
    },
    {
        id: 2,
        name: 'Trini',
        color: 'yellow',
    },
    {
        id: 3,
        name: 'Kimberly',
        color: 'pink',
    },
    {
        id: 4,
        name: 'Billy',
        color: 'blue',
    },
];
var MockServerService = /** @class */ (function () {
    function MockServerService() {
        this.rangers = defaultRangers;
        this.state = SERVER_STATE.ON;
    }
    MockServerService.prototype.intercept = function (req, next) {
        var body = req.body, method = req.method, url = req.url;
        var path = url.split('/').filter(function (segment) { return segment && segment.length > 0; });
        var id = +path[path.length - 1];
        if (this.state === SERVER_STATE.BUSY) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 429,
                body: { error: 'Too many requests' },
            }));
        }
        else if (this.state === SERVER_STATE.UNAUTHORIZED) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 401,
                body: { error: 'Unauthorized' },
            }));
        }
        else if (this.state === SERVER_STATE.ERROR) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 500,
                body: { error: 'Internal server error' },
            }));
        }
        switch (method) {
            case RequestMethod.Get:
                if (Number.isInteger(id)) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                        body: this.rangers.find(function (ranger) { return ranger.id === id; }),
                        status: 200,
                    }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                        body: this.rangers.map(function (ranger) { return ({ id: ranger.id, name: ranger.name }); }),
                        status: 200,
                    }));
                }
            case RequestMethod.Post:
                body.id = this.rangers.length;
                this.rangers.push(body);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    body: body,
                    status: 200,
                }));
            case RequestMethod.Put:
                if (Number.isInteger(id)) {
                    console.log(this.rangers);
                    var index = this.rangers.findIndex(function (ranger) { return ranger && ranger.id === id; });
                    if (index >= 0) {
                        this.rangers[index] = Object.assign({}, this.rangers[index], body);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                            body: body,
                            status: 200,
                        }));
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                            status: 404,
                            body: 'Invalid ID',
                        }));
                    }
                }
                return this.handleUnknown();
            case RequestMethod.Delete:
                if (Number.isInteger(id)) {
                    var index = this.rangers.findIndex(function (ranger) { return ranger.id === id; });
                    if (index >= 0) {
                        this.rangers = this.rangers.slice(0, index).concat(this.rangers.slice(index + 1));
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                            body: { message: 'Successfully deleted id ' + id },
                            status: 200,
                        }));
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                            status: 404,
                            body: 'Invalid ID',
                        }));
                    }
                }
                return this.handleUnknown();
            default:
                return this.handleUnknown();
        }
    };
    MockServerService.prototype.handleUnknown = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
            status: 404,
            body: 'Unknown api endpoint',
        }));
    };
    MockServerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MockServerService);
    return MockServerService;
}());



/***/ }),

/***/ "./src/demo/networkLogger.service.ts":
/*!*******************************************!*\
  !*** ./src/demo/networkLogger.service.ts ***!
  \*******************************************/
/*! exports provided: NetworkLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkLoggerService", function() { return NetworkLoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NetworkLoggerService = /** @class */ (function () {
    function NetworkLoggerService() {
    }
    NetworkLoggerService.prototype.intercept = function (req, next) {
        console.log(req.method.toUpperCase() + " " + req.url + " " + req.body);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) { return console.log(response.status || 200, response.body); }));
    };
    NetworkLoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NetworkLoggerService);
    return NetworkLoggerService;
}());



/***/ }),

/***/ "./src/demo/queriesList/queries-list.component.html":
/*!**********************************************************!*\
  !*** ./src/demo/queriesList/queries-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Queries\n<dl *ngIf=\"queriesList$ | async as queriesList\">\n  <ng-container *ngFor=\"let key of getKeys(queriesList)\">\n    <dt>{{key}}</dt>\n    <dd [id]=\"key\">{{queriesList[key] | json}}</dd>\n  </ng-container>\n</dl>\n"

/***/ }),

/***/ "./src/demo/queriesList/queries-list.component.ts":
/*!********************************************************!*\
  !*** ./src/demo/queriesList/queries-list.component.ts ***!
  \********************************************************/
/*! exports provided: QueriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueriesListComponent", function() { return QueriesListComponent; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selectors */ "./src/demo/selectors.ts");
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueriesListComponent = /** @class */ (function () {
    function QueriesListComponent(connectService) {
        this.connectService = connectService;
        this.queriesList$ = connectService.select(_selectors__WEBPACK_IMPORTED_MODULE_0__["queriesSelector"]);
    }
    QueriesListComponent.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    QueriesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'nq-queries-list',
            template: __webpack_require__(/*! ./queries-list.component.html */ "./src/demo/queriesList/queries-list.component.html")
        }),
        __metadata("design:paramtypes", [ngrx_query__WEBPACK_IMPORTED_MODULE_1__["ConnectService"]])
    ], QueriesListComponent);
    return QueriesListComponent;
}());



/***/ }),

/***/ "./src/demo/ranger/queries.ts":
/*!************************************!*\
  !*** ./src/demo/ranger/queries.ts ***!
  \************************************/
/*! exports provided: createGetRangerQuery, createGetRangerListQuery, createCreateRangerQuery, createUpdateRangerQuery, createDeleteRangerQuery, rangerByIdSelector, rangerListSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetRangerQuery", function() { return createGetRangerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetRangerListQuery", function() { return createGetRangerListQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCreateRangerQuery", function() { return createCreateRangerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUpdateRangerQuery", function() { return createUpdateRangerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeleteRangerQuery", function() { return createDeleteRangerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangerByIdSelector", function() { return rangerByIdSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangerListSelector", function() { return rangerListSelector; });
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

function createGetRangerQuery(id) {
    return {
        transform: function (response) {
            return ({ rangersById: (_a = {}, _a[id] = response, _a) });
            var _a;
        },
        update: {
            rangersById: function (prevEntities, entities) { return (__assign({}, prevEntities, entities)); },
        },
        url: "/api/rangers/" + id,
    };
}
;
function createGetRangerListQuery() {
    return {
        transform: function (response) { return ({
            rangersById: Object(ngrx_query__WEBPACK_IMPORTED_MODULE_0__["arrayToObjectsById"])(response, function (ranger) { return ranger.id; }),
        }); },
        update: {
            rangersById: function (prevRangers, rangers) { return (__assign({}, prevRangers, rangers)); },
        },
        url: "/api/rangers",
    };
}
function createCreateRangerQuery(ranger) {
    return {
        body: ranger,
        optimisticUpdate: {
            rangersById: function (prevEntities) {
                return (__assign({}, prevEntities, (_a = {}, _a[ranger.id] = ranger, _a)));
                var _a;
            },
        },
        transform: function (response) {
            return ({ rangersById: (_a = {}, _a[response.id] = response, _a) });
            var _a;
        },
        update: {
            rangersById: function (prevEntities, entities) { return (__assign({}, prevEntities, entities)); },
        },
        url: "/api/rangers",
    };
}
function createUpdateRangerQuery(ranger) {
    return {
        body: ranger,
        optimisticUpdate: {
            rangersById: function (prevEntities) {
                return (__assign({}, prevEntities, (_a = {}, _a[ranger.id] = ranger, _a)));
                var _a;
            },
        },
        options: {
            method: 'PUT',
        },
        transform: function (response) {
            return ({ rangersById: (_a = {}, _a[response.id] = response, _a) });
            var _a;
        },
        update: {
            rangersById: function (prevEntities, entities) { return (__assign({}, prevEntities, entities)); },
        },
        url: "/api/rangers/" + ranger.id,
    };
}
function createDeleteRangerQuery(id) {
    return {
        optimisticUpdate: {
            rangersById: function (prevEntities) {
                var _a = id, deleted = prevEntities[_a], rest = __rest(prevEntities, [typeof _a === "symbol" ? _a : _a + ""]);
                return rest;
            },
        },
        options: {
            method: 'DELETE',
        },
        update: {
            rangersById: function (prevEntities) {
                var _a = id, deleted = prevEntities[_a], rest = __rest(prevEntities, [typeof _a === "symbol" ? _a : _a + ""]);
                return rest;
            },
        },
        url: "/api/rangers/" + id,
    };
}
function rangerByIdSelector(rangerId) {
    return function (state) {
        if (rangerListSelector(state)) {
            return rangerListSelector(state)[rangerId];
        }
        else {
            return undefined;
        }
    };
}
function rangerListSelector(s) {
    return Object(ngrx_query__WEBPACK_IMPORTED_MODULE_0__["objectsByIdToArray"])(s.entities1.rangersById);
}


/***/ }),

/***/ "./src/demo/ranger/ranger-detail.component.html":
/*!******************************************************!*\
  !*** ./src/demo/ranger/ranger-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<strong>Favorite Color:</strong> {{nqData?.color}}\n<button [id]=\"'detailRefresh' + nqData?.id\" (click)=\"nqRefresh.emit({})\">Refresh</button>\n"

/***/ }),

/***/ "./src/demo/ranger/ranger-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/demo/ranger/ranger-detail.component.ts ***!
  \****************************************************/
/*! exports provided: RangerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangerDetailComponent", function() { return RangerDetailComponent; });
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RangerDetailComponent = /** @class */ (function () {
    function RangerDetailComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.nqData = undefined;
        this.nqRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RangerDetailComponent_1 = RangerDetailComponent;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RangerDetailComponent.prototype, "nqData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RangerDetailComponent.prototype, "nqRefresh", void 0);
    RangerDetailComponent = RangerDetailComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [Object(ngrx_query__WEBPACK_IMPORTED_MODULE_0__["provideNqConnectedComponent"])(RangerDetailComponent_1)],
            selector: 'nq-ranger-detail',
            template: __webpack_require__(/*! ./ranger-detail.component.html */ "./src/demo/ranger/ranger-detail.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], RangerDetailComponent);
    return RangerDetailComponent;
    var RangerDetailComponent_1;
}());



/***/ }),

/***/ "./src/demo/ranger/ranger-list.component.html":
/*!****************************************************!*\
  !*** ./src/demo/ranger/ranger-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"listRefresh\" (click)=\"nqRefresh.emit({})\">Refresh</button>\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Actions</th>\n  </tr>\n  <tbody *ngFor=\"let ranger of nqData\">\n    <tr>\n      <td>{{ranger.name}}</td>\n      <td>\n        <button (click)=\"showRangers[ranger.id] = !showRangers[ranger.id]\">{{ showRangers[ranger.id] ? 'Hide' : 'Show' }} Details</button>\n        <button (click)=\"edit(ranger)\">Edit</button>\n        <button (click)=\"delete(ranger.id)\">Delete</button>\n      </td>\n    </tr>\n    <tr *ngIf=\"showRangers[ranger.id]\">\n      <td colspan=\"2\">\n        <nq-ranger-detail [nqConnect]=\"getDetailsQuery(ranger.id)\"></nq-ranger-detail>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Add person</h3>\n<label for=\"name\">Name</label><br>\n<input type=\"text\" id=\"name\" [(ngModel)]=\"newRanger.name\" placeholder=\"i.e. Tommy\"><br>\n<label for=\"color\">Color</label><br>\n<input type=\"text\" id=\"color\" [(ngModel)]=\"newRanger.color\" placeholder=\"i.e. green\"><br>\n<button id=\"add\" (click)=\"create(newRanger)\">Add</button>\n"

/***/ }),

/***/ "./src/demo/ranger/ranger-list.component.ts":
/*!**************************************************!*\
  !*** ./src/demo/ranger/ranger-list.component.ts ***!
  \**************************************************/
/*! exports provided: RangerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangerListComponent", function() { return RangerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries */ "./src/demo/ranger/queries.ts");
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RangerListComponent = /** @class */ (function () {
    function RangerListComponent(connectService, changeDetector) {
        this.connectService = connectService;
        this.changeDetector = changeDetector;
        this.nqRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showRangers = {};
        this.newRanger = {};
    }
    RangerListComponent_1 = RangerListComponent;
    RangerListComponent.prototype.getDetailsQuery = function (id) {
        return Object.assign({}, Object(_queries__WEBPACK_IMPORTED_MODULE_1__["createGetRangerQuery"])(id), { selector: Object(_queries__WEBPACK_IMPORTED_MODULE_1__["rangerByIdSelector"])(id) });
    };
    RangerListComponent.prototype.edit = function (ranger) {
        var updatedRanger = Object.assign({}, ranger, { name: ranger.name + ' Edited' });
        var mutateQuery = Object.assign({}, Object(_queries__WEBPACK_IMPORTED_MODULE_1__["createUpdateRangerQuery"])(updatedRanger), { selector: Object(_queries__WEBPACK_IMPORTED_MODULE_1__["rangerByIdSelector"])(ranger.id) });
        this.connectService.mutateAsync(mutateQuery);
    };
    RangerListComponent.prototype.create = function (ranger) {
        var mutateQuery = Object.assign({}, Object(_queries__WEBPACK_IMPORTED_MODULE_1__["createCreateRangerQuery"])(ranger));
        this.connectService.mutateAsync(mutateQuery);
        this.newRanger = {};
    };
    RangerListComponent.prototype.delete = function (id) {
        var mutateQuery = Object.assign({}, Object(_queries__WEBPACK_IMPORTED_MODULE_1__["createDeleteRangerQuery"])(id));
        this.connectService.mutateAsync(mutateQuery);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RangerListComponent.prototype, "nqData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RangerListComponent.prototype, "nqRefresh", void 0);
    RangerListComponent = RangerListComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [Object(ngrx_query__WEBPACK_IMPORTED_MODULE_2__["provideNqConnectedComponent"])(RangerListComponent_1)],
            selector: 'nq-ranger-list',
            template: __webpack_require__(/*! ./ranger-list.component.html */ "./src/demo/ranger/ranger-list.component.html")
        }),
        __metadata("design:paramtypes", [ngrx_query__WEBPACK_IMPORTED_MODULE_2__["ConnectService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RangerListComponent);
    return RangerListComponent;
    var RangerListComponent_1;
}());



/***/ }),

/***/ "./src/demo/ranger/ranger-list.data.directive.ts":
/*!*******************************************************!*\
  !*** ./src/demo/ranger/ranger-list.data.directive.ts ***!
  \*******************************************************/
/*! exports provided: RangerListDataDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangerListDataDirective", function() { return RangerListDataDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries */ "./src/demo/ranger/queries.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var RangerListDataDirective = /** @class */ (function (_super) {
    __extends(RangerListDataDirective, _super);
    function RangerListDataDirective(connect, changeDetector, host) {
        var _this = _super.call(this, connect, changeDetector, host) || this;
        _this.connect = connect;
        _this.changeDetector = changeDetector;
        _this.host = host;
        _this.config = Object.assign({}, Object(_queries__WEBPACK_IMPORTED_MODULE_2__["createGetRangerListQuery"])(), { selector: _queries__WEBPACK_IMPORTED_MODULE_2__["rangerListSelector"] });
        return _this;
    }
    RangerListDataDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[rangerListData]' }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [ngrx_query__WEBPACK_IMPORTED_MODULE_1__["ConnectService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], ngrx_query__WEBPACK_IMPORTED_MODULE_1__["NqConnectedComponent"]])
    ], RangerListDataDirective);
    return RangerListDataDirective;
}(ngrx_query__WEBPACK_IMPORTED_MODULE_1__["ConnectRequestDirective"]));



/***/ }),

/***/ "./src/demo/selectors.ts":
/*!*******************************!*\
  !*** ./src/demo/selectors.ts ***!
  \*******************************/
/*! exports provided: entitiesSelector, queriesSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesSelector", function() { return entitiesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queriesSelector", function() { return queriesSelector; });
function entitiesSelector(state) {
    return state.entities1;
}
function queriesSelector(state) {
    return state.queries1;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var ngrx_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-query */ "./dist/ngrx-query/fesm5/ngrx-query.js");

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    mockMode: ngrx_query__WEBPACK_IMPORTED_MODULE_0__["MockMode"].None,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _demo_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo/app.module */ "./src/demo/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_demo_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isaac/Documents/Contributions/ngrx-query/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map