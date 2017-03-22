webpackJsonp([1,4],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REQUEST_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CANCEL_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MUTATE_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MUTATE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MUTATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MUTATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return REMOVE_ENTITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REMOVE_ENTITY; });
var REQUEST_ASYNC = '@@query/REQUEST_ASYNC';
var REQUEST_START = '@@query/REQUEST_START';
var REQUEST_SUCCESS = '@@query/REQUEST_SUCCESS';
var REQUEST_FAILURE = '@@query/REQUEST_FAILURE';
var CANCEL_QUERY = '@@query/CANCEL_QUERY';
var MUTATE_ASYNC = '@@query/MUTATE_ASYNC';
var MUTATE_START = '@@query/MUTATE_START';
var MUTATE_SUCCESS = '@@query/MUTATE_SUCCESS';
var MUTATE_FAILURE = '@@query/MUTATE_FAILURE';
var RESET = '@@query/RESET';
var REMOVE_ENTITIES = '@@query/REMOVE_ENTITIES';
var REMOVE_ENTITY = '@@query/REMOVE_ENTITY';
//# sourceMappingURL=action-types.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

;
;
//# sourceMappingURL=ngrxQueryConfig.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retryWhen__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_range__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_zip__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_query__ = __webpack_require__(468);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_10__ngrx_query__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_effects_service__ = __webpack_require__(315);
/* unused harmony reexport NgrxQueryEffects */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__redux_query_reducers_entities__ = __webpack_require__(470);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_12__redux_query_reducers_entities__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__redux_query_reducers_queries__ = __webpack_require__(471);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_13__redux_query_reducers_queries__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__redux_query_selectors__ = __webpack_require__(472);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_connect_service__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_15__services_connect_service__["a"]; });
/* unused harmony reexport ConnectRequestParams */
/* unused harmony reexport ConnectMutateParams */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_connect_directive__ = __webpack_require__(310);
/* unused harmony reexport ConnectRequestDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__helpers_config__ = __webpack_require__(80);
/* unused harmony reexport NGRX_QUERY_CONFIG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_ngrxQueryConfig__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__helpers_ngrxQueryConfig__);
/* unused harmony reexport NgrxQueryConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_actions__ = __webpack_require__(312);
/* unused harmony reexport RequestParams */
/* unused harmony reexport MutateParams */
/* unused harmony reexport requestAsync */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_19__helpers_actions__["a"]; });




















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_actions__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ConnectService = (function () {
    function ConnectService(store, config) {
        this.store = store;
        this.config = config;
    }
    ConnectService.prototype.mutateAsync = function (config) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_actions__["a" /* mutateAsync */])(config));
        return this.select(config.selector);
    };
    ConnectService.prototype.requestAsync = function (config) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_actions__["b" /* requestAsync */])(config));
        return this.select(config.selector);
    };
    ConnectService.prototype.select = function (selector) {
        return this.store.select(selector || this.config.entitiesSelector || __WEBPACK_IMPORTED_MODULE_2__helpers_config__["a" /* defaultEntitiesSelector */]);
    };
    return ConnectService;
}());
ConnectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__helpers_config__["b" /* NGRX_QUERY_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["g" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__["NgrxQueryConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__["NgrxQueryConfig"]) === "function" && _b || Object])
], ConnectService);

var _a, _b;
//# sourceMappingURL=connect.service.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_connect_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectRequestDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectRequestDirective = (function () {
    function ConnectRequestDirective(connectService) {
        this.connectService = connectService;
        // tslint:disable-next-line:no-input-rename
        this.config = undefined;
        this.response = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    ConnectRequestDirective.prototype.ngOnInit = function () {
        console.log('on init');
        this.subscribe(this.config);
    };
    ConnectRequestDirective.prototype.ngOnDestroy = function () {
        console.log('on destroy');
        this.unsubscribe();
    };
    ConnectRequestDirective.prototype.subscribe = function (config) {
        var _this = this;
        // this.unsubscribe();
        this.subscription = this.connectService.requestAsync(config).subscribe(function (response) {
            _this.response.emit(response);
        });
    };
    ConnectRequestDirective.prototype.unsubscribe = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ConnectRequestDirective.prototype.forceRequest = function () {
        this.subscribe(Object.assign({}, this.config, { force: true }));
    };
    return ConnectRequestDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('nqConnect'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConnectRequestDirective.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ConnectRequestDirective.prototype, "response", void 0);
ConnectRequestDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        exportAs: 'nqConnect',
        selector: 'nqConnect, [nqConnect]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_connect_service__["a" /* ConnectService */]) === "function" && _b || Object])
], ConnectRequestDirective);

var _a, _b;
//# sourceMappingURL=connect.directive.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MUTATE_ASYNC; });
/* unused harmony export CANCEL_QUERY */
/* unused harmony export RESET */
var REQUEST_ASYNC = '[ngrx-query] REQUEST_ASYNC';
var MUTATE_ASYNC = '[ngrx-query] MUTATE_ASYNC';
var CANCEL_QUERY = '[ngrx-query] CANCEL_QUERY';
var RESET = '[ngrx-query] RESET';
//# sourceMappingURL=actionTypes.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_query_actions__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return requestAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mutateAsync; });


;
;
var requestAsync = function (params) { return Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__redux_query_actions__["a" /* requestAsync */](params), { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* REQUEST_ASYNC */] }); };
var mutateAsync = function (params) { return Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__redux_query_actions__["b" /* mutateAsync */](params), { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* MUTATE_ASYNC */] }); };
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_types__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return requestStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return requestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return requestFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mutateStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mutateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mutateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mutateAsync; });
/* unused harmony export cancelQuery */
/* unused harmony export removeEntity */
/* unused harmony export removeEntities */

var requestStart = function (url, body, request, meta, queryKey) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* REQUEST_START */],
        url: url,
        body: body,
        request: request,
        meta: meta,
        queryKey: queryKey,
    };
};
var requestSuccess = function (url, body, status, entities, meta, queryKey) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["b" /* REQUEST_SUCCESS */],
        url: url,
        body: body,
        status: status,
        entities: entities,
        meta: meta,
        queryKey: queryKey,
        time: Date.now(),
    };
};
var requestFailure = function (url, body, status, responseBody, meta, queryKey) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["c" /* REQUEST_FAILURE */],
        url: url,
        body: body,
        status: status,
        responseBody: responseBody,
        meta: meta,
        queryKey: queryKey,
        time: Date.now(),
    };
};
var mutateStart = function (url, body, request, optimisticEntities, queryKey) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["d" /* MUTATE_START */],
        url: url,
        body: body,
        request: request,
        optimisticEntities: optimisticEntities,
        queryKey: queryKey,
    };
};
var mutateSuccess = function (url, body, status, entities, queryKey) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["e" /* MUTATE_SUCCESS */],
        url: url,
        body: body,
        status: status,
        entities: entities,
        queryKey: queryKey,
        time: Date.now(),
    };
};
var mutateFailure = function (url, body, status, originalEntities, queryKey) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["f" /* MUTATE_FAILURE */],
        url: url,
        body: body,
        status: status,
        originalEntities: originalEntities,
        queryKey: queryKey,
        time: Date.now(),
    };
};
var requestAsync = function (_a) {
    var body = _a.body, force = _a.force, queryKey = _a.queryKey, meta = _a.meta, options = _a.options, retry = _a.retry, transform = _a.transform, update = _a.update, url = _a.url;
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["g" /* REQUEST_ASYNC */],
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
var mutateAsync = function (_a) {
    var body = _a.body, optimisticUpdate = _a.optimisticUpdate, options = _a.options, queryKey = _a.queryKey, transform = _a.transform, update = _a.update, url = _a.url;
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["h" /* MUTATE_ASYNC */],
        body: body,
        optimisticUpdate: optimisticUpdate,
        options: options,
        queryKey: queryKey,
        transform: transform,
        update: update,
        url: url,
    };
};
var cancelQuery = function (queryKey) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["i" /* CANCEL_QUERY */],
        queryKey: queryKey,
    };
};
var removeEntity = function (path) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["j" /* REMOVE_ENTITY */],
        path: path,
    };
};
var removeEntities = function (paths) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__action_types__["k" /* REMOVE_ENTITIES */],
        paths: paths,
    };
};
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getQueryKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reconcileQueryKey; });
var getQueryKey = function (url, body) {
    return JSON.stringify({ url: url, body: body });
};
var reconcileQueryKey = function (_a) {
    var url = _a.url, body = _a.body, queryKey = _a.queryKey;
    if (queryKey !== null && queryKey !== undefined) {
        return queryKey;
    }
    else {
        return getQueryKey(url, body);
    }
};
//# sourceMappingURL=query-key.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_invariant__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_actionTypes__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redux_query_actions__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__redux_query_action_types__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__redux_query_http_methods__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__redux_query_query_key__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__);
/* unused harmony export identity */
/* unused harmony export optimisticUpdateEntities */
/* unused harmony export updateEntities */
/* unused harmony export getPendingQueries */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxQueryEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















function identity(x, y) {
    return x;
}
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
;
function updateEntities(update, entities, transformed) {
    // If update not supplied, then no change to entities should be made
    return Object.keys(update || {}).reduce(function (accum, key) {
        accum[key] = update[key]((entities || {})[key], (transformed || {})[key]);
        return accum;
    }, {});
}
;
function getPendingQueries(queries) {
    return queries.filter(function (query) { return query.isPending; });
}
;
var NgrxQueryEffects = (function () {
    // @Effect() public cancelQuery: Observable<Action> = this.actions$;
    // @Effect() public reset: Observable<Action> = this.actions$;
    function NgrxQueryEffects(actions$, store, http, config) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.http = http;
        this.config = config;
        this.requestAsync = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__helpers_actionTypes__["a" /* REQUEST_ASYNC */])
            .map(function (action) {
            var url = action.url, force = action.force, retry = action.retry, update = action.update;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_invariant__["a" /* invariant */])(!!url, 'Missing required `url` field in action handler');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_invariant__["a" /* invariant */])(!!update, 'Missing required `update` field in action handler');
            var queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__redux_query_query_key__["a" /* reconcileQueryKey */])(action);
            var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__["a" /* getLatest */])(_this.store);
            var queries = _this.config.queriesSelector
                ? _this.config.queriesSelector(state)
                : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_config__["c" /* defaultQueriesSelector */])(state);
            var queriesState = queries[queryKey];
            var _a = queriesState || {}, isPending = _a.isPending, status = _a.status;
            var hasSucceeded = status >= 200 && status < 300;
            var attemptRequest = force || !queriesState || (retry && !isPending && !hasSucceeded);
            return { attemptRequest: attemptRequest, action: action };
        })
            .filter(function (_a) {
            var attemptRequest = _a.attemptRequest;
            return attemptRequest;
        })
            .mergeMap(function (_a) {
            var action = _a.action;
            var url = action.url, body = action.body, _b = action.transform, transform = _b === void 0 ? identity : _b, update = action.update, _c = action.options, options = _c === void 0 ? {} : _c, meta = action.meta;
            var queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__redux_query_query_key__["a" /* reconcileQueryKey */])(action);
            var start = new Date();
            var _d = options.method, method = _d === void 0 ? __WEBPACK_IMPORTED_MODULE_12__redux_query_http_methods__["a" /* GET */] : _d;
            var request = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Request"]({
                url: url,
                method: method,
                body: body,
                headers: options.headers,
                withCredentials: options.credentials === 'include',
            });
            return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].of({})
                .mergeMap(function () {
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_10__redux_query_actions__["c" /* requestStart */](url, body, request, meta, queryKey));
                return _this.http.request(url, request);
            })
                .map(function (response) {
                var callbackState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__["a" /* getLatest */])(_this.store);
                var entities = _this.config.entitiesSelector
                    ? _this.config.entitiesSelector(callbackState)
                    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_config__["a" /* defaultEntitiesSelector */])(callbackState);
                var transformed = transform(response.json(), response.text());
                var newEntities = updateEntities(update, entities, transformed);
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_10__redux_query_actions__["d" /* requestSuccess */](url, body, response.status, newEntities, meta, queryKey));
                var end = new Date();
                var duration = end.valueOf() - start.valueOf();
                return {
                    body: response.json(),
                    duration: duration,
                    entities: newEntities,
                    status: response.status,
                    text: response.text,
                    transformed: transformed,
                    type: __WEBPACK_IMPORTED_MODULE_11__redux_query_action_types__["g" /* REQUEST_ASYNC */],
                };
            })
                .retryWhen(function (attempts) {
                return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].range(1, _this.config.backoff.maxAttempts + 1)
                    .zip(attempts, function (i, response) { return ({ response: response, i: i }); })
                    .flatMap(function (_a) {
                    var response = _a.response, i = _a.i;
                    if (i < _this.config.backoff.maxAttempts && _this.config.retryableStatusCodes.indexOf(response.status) >= 0) {
                        // Delay retry by min duration the first attempt, up to max duration on the (maxAttempts)th attempt
                        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].timer(_this.config.backoff.minDuration +
                            (i - 1) * (_this.config.backoff.maxDuration - _this.config.backoff.minDuration) / _this.config.backoff.maxAttempts);
                    }
                    else {
                        // Tried maxAttempts, now fail
                        throw response;
                    }
                });
            })
                .catch(function (errResponse, caught) {
                if (!errResponse.text) {
                    throw errResponse;
                }
                return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_10__redux_query_actions__["e" /* requestFailure */](url, body, errResponse.status, errResponse.text(), meta, queryKey));
            });
        });
        this.mutateAsync = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__helpers_actionTypes__["b" /* MUTATE_ASYNC */])
            .mergeMap(function (action) {
            var url = action.url, _a = action.transform, transform = _a === void 0 ? identity : _a, update = action.update, body = action.body, optimisticUpdate = action.optimisticUpdate, _b = action.options, options = _b === void 0 ? {} : _b;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_invariant__["a" /* invariant */])(!!url, 'Missing required `url` field in action handler');
            var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__["a" /* getLatest */])(_this.store);
            var entities = _this.config.entitiesSelector
                ? _this.config.entitiesSelector(state)
                : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_config__["a" /* defaultEntitiesSelector */])(state);
            var optimisticEntities;
            if (optimisticUpdate) {
                optimisticEntities = optimisticUpdateEntities(optimisticUpdate, entities);
            }
            var queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__redux_query_query_key__["a" /* reconcileQueryKey */])(action);
            // const start = new Date();
            var _c = options.method, method = _c === void 0 ? __WEBPACK_IMPORTED_MODULE_12__redux_query_http_methods__["b" /* POST */] : _c;
            var request = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Request"]({
                url: url,
                method: method,
                body: body,
                headers: options.headers,
                withCredentials: options.credentials === 'include',
            });
            // Note: only the entities that are included in `optimisticUpdate` will be passed along in the
            // `mutateStart` action as `optimisticEntities`
            _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_10__redux_query_actions__["f" /* mutateStart */](url, body, request, optimisticEntities, queryKey));
            return _this.http.request(url, request)
                .map(function (response) {
                var resStatus = (response && response.status) || 0;
                var resBody = (response && response.json()) || undefined;
                var resText = (response && response.text()) || undefined;
                var transformed = transform(resBody, resText);
                var newEntities = updateEntities(update, entities, transformed);
                return __WEBPACK_IMPORTED_MODULE_10__redux_query_actions__["g" /* mutateSuccess */](url, body, resStatus, newEntities, queryKey);
            })
                .catch(function (errResponse) { return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_10__redux_query_actions__["h" /* mutateFailure */](url, body, errResponse.status, entities, queryKey)); });
        });
    }
    return NgrxQueryEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], NgrxQueryEffects.prototype, "requestAsync", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], NgrxQueryEffects.prototype, "mutateAsync", void 0);
NgrxQueryEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__helpers_config__["b" /* NGRX_QUERY_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["b" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["g" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__["NgrxQueryConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__["NgrxQueryConfig"]) === "function" && _f || Object])
], NgrxQueryEffects);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=effects.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 340;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(465);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__demo_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.dashboardId = 2;
        this.isShown = false;
        this.config = {
            selector: function (s) { return s.queries; },
            transform: function (response) { return ({
                chartsById: { test: response.test },
                dashboardsById: { test: response.test },
            }); },
            update: {
                chartsById: function (prevCharts, dashboardCharts) { return (__assign({}, prevCharts, dashboardCharts)); },
                dashboardsById: function (prevDashboards, dashboards) { return (__assign({}, prevDashboards, dashboards)); },
            },
            url: "/api/dashboard/" + this.dashboardId,
        };
    }
    AppComponent.prototype.onDataReceived = function (data) {
        this.data = data;
        console.log(data);
    };
    AppComponent.prototype.log = function (message) {
        console.log(message);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nq-demo',
        styles: [__webpack_require__(526)],
        template: __webpack_require__(528),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http_testing__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http_testing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_http_testing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__ = __webpack_require__(457);
/* unused harmony export httpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










function httpFactory(backend, options) {
    return new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"](backend, options);
}
var AppModule = (function () {
    function AppModule(appRef, mockBackend) {
        this.appRef = appRef;
        this.mockBackend = mockBackend;
        mockBackend.connections.subscribe(function (connection) {
            console.log(connection);
            connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_5__angular_http__["ResponseOptions"]({
                body: JSON.stringify({ test: 'value' }),
            })));
        });
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* StoreModule */].provideStore({
                entities: __WEBPACK_IMPORTED_MODULE_1__lib__["a" /* entitiesReducer */],
                queries: __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* queriesReducer */],
            }),
            __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* NgrxQueryModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["BaseRequestOptions"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http_testing__["MockBackend"],
            {
                deps: [__WEBPACK_IMPORTED_MODULE_6__angular_http_testing__["MockBackend"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["BaseRequestOptions"]],
                provide: __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
                useFactory: httpFactory,
            },
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ApplicationRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http_testing__["MockBackend"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http_testing__["MockBackend"]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queries__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(connectService) {
        this.connectService = connectService;
        this.dashboardId = 2;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var newName = 'steve';
        this.dashboard$ = this.connectService.mutateAsync(__assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["a" /* createUpdateDashboardQuery */])(this.dashboardId, newName), { selector: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["b" /* dashboardByIdSelector */])(this.dashboardId) }));
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "dashboardId", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'my-dashboard',
        template: __webpack_require__(529)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["d" /* ConnectService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUpdateDashboardQuery; });
/* unused harmony export updateDashboard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dashboardByIdSelector; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var createUpdateDashboardQuery = function (dashboardId, newName) { return ({
    body: {
        name: newName,
    },
    update: {
        dashboardsById: function (prevDashboardsById, newDashboardsById) { return (__assign({}, prevDashboardsById, newDashboardsById)); },
    },
    url: "/api/" + dashboardId + "/update",
}); };
var updateDashboard = function (dashboardId, newName) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib__["e" /* mutateAsync */])(createUpdateDashboardQuery(dashboardId, newName));
};
var dashboardByIdSelector = function (dashboardId) { return function (state) {
    if (state.entities.dashboardsById) {
        return state.entities.dashboardsById[dashboardId];
    }
    else {
        return undefined;
    }
}; };
//# sourceMappingURL=queries.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLatest;
function getLatest(o$) {
    var result;
    o$.take(1).subscribe(function (x) { return result = x; });
    return result;
}
//# sourceMappingURL=getLatest.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = invariant;
function invariant(condition, message, context) {
    if (!condition) {
        var errorMessage = message;
        if (context) {
            errorMessage = (message.indexOf('%s') !== -1) ?
                message.replace('%s', context) :
                errorMessage = message + ": " + context;
        }
        throw new Error(errorMessage);
    }
}
//# sourceMappingURL=invariant.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_connect_directive__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_connect_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_effects_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxQueryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NgrxQueryModule = NgrxQueryModule_1 = (function () {
    function NgrxQueryModule() {
    }
    /* optional: in case you need users to override your providers */
    NgrxQueryModule.forRoot = function (config) {
        return {
            ngModule: NgrxQueryModule_1,
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__helpers_config__["b" /* NGRX_QUERY_CONFIG */], useValue: config }],
        };
    };
    return NgrxQueryModule;
}());
NgrxQueryModule = NgrxQueryModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__directives_connect_directive__["a" /* ConnectRequestDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__directives_connect_directive__["a" /* ConnectRequestDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_3__services_effects_service__["a" /* NgrxQueryEffects */]),
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__helpers_config__["b" /* NGRX_QUERY_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_1__helpers_config__["d" /* defaultConfig */] },
            __WEBPACK_IMPORTED_MODULE_3__services_effects_service__["a" /* NgrxQueryEffects */],
            __WEBPACK_IMPORTED_MODULE_2__services_connect_service__["a" /* ConnectService */],
        ],
    })
], NgrxQueryModule);

var NgrxQueryModule_1;
//# sourceMappingURL=ngrx-query.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DELETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET; });
/* unused harmony export HEAD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POST; });
/* unused harmony export PUT */
var DELETE = 'DELETE';
var GET = 'GET';
var HEAD = 'HEAD';
var POST = 'POST';
var PUT = 'PUT';
//# sourceMappingURL=http-methods.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_types__ = __webpack_require__(123);
/* unused harmony export initialState */
/* unused harmony export withoutPath */
/* unused harmony export entities */

var initialState = {};
var withoutPath = function (state, path) {
    var key = path[0], restPath = path.slice(1);
    if (restPath.length) {
        return Object.assign({}, state, (_a = {},
            _a[key] = withoutPath(state[key], restPath),
            _a));
    }
    else {
        var newState = Object.assign({}, state);
        delete newState[key];
        return newState;
    }
    var _a;
};
var entities = function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["l" /* RESET */]) {
        return 'entities' in action ? action.entities : initialState;
    }
    else if (action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["d" /* MUTATE_START */] && action.optimisticEntities) {
        return Object.assign({}, state, action.optimisticEntities);
    }
    else if (action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["f" /* MUTATE_FAILURE */] && action.originalEntities) {
        return Object.assign({}, state, action.originalEntities);
    }
    else if (action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["b" /* REQUEST_SUCCESS */] || action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["e" /* MUTATE_SUCCESS */]) {
        return Object.assign({}, state, action.entities);
    }
    else if (action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["k" /* REMOVE_ENTITIES */]) {
        return action.paths.reduce(function (accum, path) {
            return withoutPath(accum, path);
        }, state);
    }
    else if (action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["j" /* REMOVE_ENTITY */]) {
        return withoutPath(state, action.path);
    }
    else {
        return state;
    }
};
/* harmony default export */ __webpack_exports__["a"] = entities;
//# sourceMappingURL=entities.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_types__ = __webpack_require__(123);

var initialState = {};
var queries = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["l" /* RESET */]: {
            return {};
        }
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["d" /* MUTATE_START */]:
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* REQUEST_START */]: {
            var queryKey = action.queryKey;
            return Object.assign({}, state, (_a = {},
                _a[queryKey] = {
                    url: action.url,
                    isFinished: false,
                    isPending: true,
                    request: action.request,
                    isMutation: action.type === __WEBPACK_IMPORTED_MODULE_0__action_types__["d" /* MUTATE_START */],
                    queryCount: state[queryKey] ? state[queryKey].queryCount + 1 : 1,
                },
                _a));
        }
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["b" /* REQUEST_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["f" /* MUTATE_FAILURE */]:
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["e" /* MUTATE_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["c" /* REQUEST_FAILURE */]: {
            var queryKey = action.queryKey;
            return Object.assign({}, state, (_b = {},
                _b[queryKey] = Object.assign({}, state[queryKey], {
                    isFinished: true,
                    isPending: false,
                    lastUpdated: action.time,
                    status: action.status,
                }),
                _b));
        }
        case __WEBPACK_IMPORTED_MODULE_0__action_types__["i" /* CANCEL_QUERY */]: {
            var queryKey = action.queryKey;
            if (state[queryKey].isPending) {
                // Make sure request is actually pending
                return Object.assign({}, state, (_c = {},
                    _c[queryKey] = Object.assign({}, state[queryKey], {
                        isFinished: true,
                        isPending: false,
                        status: 0,
                    }),
                    _c));
            }
            return state;
        }
        default: {
            return state;
        }
    }
    var _a, _b, _c;
};
/* harmony default export */ __webpack_exports__["a"] = queries;
//# sourceMappingURL=queries.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_key__ = __webpack_require__(314);
/* unused harmony export isFinished */
/* unused harmony export isPending */
/* unused harmony export status */
/* unused harmony export lastUpdated */
/* unused harmony export queryCount */
// import get from 'lodash.get';

var isFinished = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])(urlOrConfig);
    }
    return queriesState[queryKey].isFinished;
}; };
var isPending = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])(urlOrConfig);
    }
    return queriesState[queryKey].isPending;
}; };
var status = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])(urlOrConfig);
    }
    return queriesState[queryKey].status;
}; };
var lastUpdated = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])(urlOrConfig);
    }
    return queriesState[queryKey].lastUpdated;
}; };
var queryCount = function (urlOrConfig, body) { return function (queriesState) {
    var queryKey;
    if (typeof urlOrConfig === 'string') {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])({ url: urlOrConfig, body: body });
    }
    else {
        queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__query_key__["a" /* reconcileQueryKey */])(urlOrConfig);
    }
    return queriesState[queryKey].queryCount;
}; };
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(204)();
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n  font-family: sans-serif; }\n\nmain {\n  padding: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block; }\n\nfooter {\n  text-align: center;\n  font-size: 0.8em;\n  width: 100%;\n  position: absolute;\n  bottom: 20px; }\n\nfooter a {\n  text-decoration: none;\n  font-family: sans-serif; }\n\nfooter a:hover {\n  text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1 class=\"title\">Test</h1>\n</header>\n<main>\n  <label for=\"isShown\">Show Connected Element?</label> <input id=\"isShown\" type=\"checkbox\" [(ngModel)]=\"isShown\">\n  <nqConnect *ngIf=\"isShown\" [config]=\"config\" (response)=\"data = $event\" #connect=\"nqConnect\">\n    {{ data?.chartsById?.test }}\n    <a href (click)=\"connect.forceRequest(); $event.preventDefault()\">Force Refresh</a>\n  </nqConnect>\n</main>\n<footer>\n  <a href=\"https://github.com/isaacplmann/ngrx-query\">Ngrx Query</a>\n</footer>\n"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "{{ dashboard$ | async }}\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export statusCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NGRX_QUERY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultEntitiesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultQueriesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultConfig; });

var statusCodes = {
    GATEWAY_TIMEOUT: 504,
    REQUEST_TIMEOUT: 408,
    SERVICE_UNAVAILABLE: 503,
    TOO_MANY_REQUESTS: 429,
    UNKNOWN: 0,
};
var NGRX_QUERY_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('NGRX_QUERY_CONFIG');
var defaultEntitiesSelector = function (state) { return state.entities; };
var defaultQueriesSelector = function (state) { return state.queries; };
var defaultConfig = {
    backoff: {
        maxAttempts: 5,
        maxDuration: 5000,
        minDuration: 300,
    },
    retryableStatusCodes: [
        statusCodes.UNKNOWN,
        statusCodes.REQUEST_TIMEOUT,
        statusCodes.TOO_MANY_REQUESTS,
        statusCodes.SERVICE_UNAVAILABLE,
        statusCodes.GATEWAY_TIMEOUT,
    ],
};
//# sourceMappingURL=config.js.map

/***/ })

},[581]);
//# sourceMappingURL=main.bundle.js.map