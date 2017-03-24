webpackJsonp([1,4],{

/***/ 186:
/***/ (function(module, exports) {

;
;
//# sourceMappingURL=ngrxQueryConfig.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_query_dist_commonjs_reducers_entities__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_query_dist_commonjs_reducers_entities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_query_dist_commonjs_reducers_entities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connect_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["c"] = objectsByIdToArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = arrayToObjectsById;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectEntityService; });
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



function objectsByIdToArray(obj) {
    if (!obj) {
        return [];
    }
    return Object.keys(obj).map(function (key) { return obj[key]; });
}
;
function arrayToObjectsById(array, keyOf) {
    return array.reduce(function (objectsById, item) {
        objectsById[keyOf(item)] = item;
        return objectsById;
    }, {});
}
var ConnectEntityService = (function () {
    function ConnectEntityService(connectService) {
        this.connectService = connectService;
    }
    ConnectEntityService.prototype.init = function (config) {
        this.config = config;
    };
    ConnectEntityService.prototype.list = function () {
        var _this = this;
        return this.connectService.requestAsync({
            selector: function (s) { return objectsByIdToArray(s.entities[_this.config.entityTypeName]); },
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = arrayToObjectsById(response, _this.config.idSelector), _a);
                var _a;
            },
            update: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities, entities) { return (__assign({}, prevEntities, entities)); },
                _a),
            url: this.config.endpoints.list,
        });
        var _a;
    };
    ConnectEntityService.prototype.get = function (id) {
        var _this = this;
        return this.connectService.requestAsync({
            selector: function (s) { return s.entities[_this.config.entityTypeName] && s.entities[_this.config.entityTypeName][id]; },
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = (_b = {}, _b[id] = response, _b), _a);
                var _a, _b;
            },
            update: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities, entities) { return (__assign({}, prevEntities, entities)); },
                _a),
            url: this.config.endpoints.getById(id),
        });
        var _a;
    };
    ConnectEntityService.prototype.create = function (entity) {
        var _this = this;
        return this.connectService.mutateAsync({
            body: entity,
            optimisticUpdate: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities) {
                    return (__assign({}, prevEntities, (_a = {}, _a[_this.config.idSelector(entity)] = entity, _a)));
                    var _a;
                },
                _a),
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = (_b = {}, _b[_this.config.idSelector(response)] = response, _b), _a);
                var _a, _b;
            },
            update: (_b = {},
                _b[this.config.entityTypeName] = function (prevEntities, entities) { return (__assign({}, prevEntities, entities)); },
                _b),
            url: this.config.endpoints.create,
        });
        var _a, _b;
    };
    ConnectEntityService.prototype.edit = function (entity) {
        var _this = this;
        return this.connectService.mutateAsync({
            body: entity,
            optimisticUpdate: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities) {
                    return (__assign({}, prevEntities, (_a = {}, _a[_this.config.idSelector(entity)] = entity, _a)));
                    var _a;
                },
                _a),
            selector: function (s) { return s.entities[_this.config.entityTypeName][_this.config.idSelector(entity)]; },
            transform: function (response) {
                return (_a = {}, _a[_this.config.entityTypeName] = (_b = {}, _b[_this.config.idSelector(response)] = response, _b), _a);
                var _a, _b;
            },
            update: (_b = {},
                _b[this.config.entityTypeName] = function (prevEntities, entities) { return (__assign({}, prevEntities, entities)); },
                _b),
            url: this.config.endpoints.update,
        });
        var _a, _b;
    };
    ConnectEntityService.prototype.delete = function (id) {
        var _this = this;
        return this.connectService.mutateAsync({
            selector: function (s) { return s.entities[_this.config.entityTypeName][id]; },
            optimisticUpdate: (_a = {},
                _a[this.config.entityTypeName] = function (prevEntities) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_query_dist_commonjs_reducers_entities__["withoutPath"])(prevEntities, [id]); },
                _a),
            update: (_b = {},
                _b[this.config.entityTypeName] = function (prevEntities) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_query_dist_commonjs_reducers_entities__["withoutPath"])(prevEntities, [id]); },
                _b),
            url: this.config.endpoints.remove(id + ''),
        });
        var _a, _b;
    };
    return ConnectEntityService;
}());
ConnectEntityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__connect_service__["a" /* ConnectService */]) === "function" && _a || Object])
], ConnectEntityService);

var _a;
//# sourceMappingURL=connectEntity.service.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERVER_STATE; });
/* unused harmony export defaultRangers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockServerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SERVER_STATE;
(function (SERVER_STATE) {
    SERVER_STATE[SERVER_STATE["ON"] = 0] = "ON";
    SERVER_STATE[SERVER_STATE["BUSY"] = 1] = "BUSY";
    SERVER_STATE[SERVER_STATE["ERROR"] = 2] = "ERROR";
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
var MockServerService = (function () {
    function MockServerService() {
        this.rangers = defaultRangers;
        this.state = SERVER_STATE.ON;
    }
    MockServerService.prototype.handleConnection = function (connection) {
        var method = connection.request.method;
        var url = connection.request.url;
        var body = JSON.parse(connection.request.getBody());
        console.log(__WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"][method].toUpperCase() + " " + url, body);
        connection.response.asObservable().take(1).subscribe(function (response) { return console.log("" + (response.status || 200), response.json()); });
        var path = url.split('/').filter(function (segment) { return segment && segment.length > 0; });
        var id = +path[path.length - 1];
        if (this.state === SERVER_STATE.BUSY) {
            connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                status: 429,
                body: { error: 'Too many requests' },
            })));
            return;
        }
        else if (this.state === SERVER_STATE.ERROR) {
            connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                status: 500,
                body: { error: 'Internal server error' },
            })));
            return;
        }
        switch (method) {
            case __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get:
                if (Number.isInteger(id)) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                        body: JSON.stringify(this.rangers.find(function (ranger) { return ranger.id === id; })),
                        status: 200,
                    })));
                }
                else {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                        body: JSON.stringify(this.rangers.map(function (ranger) { return ({ id: ranger.id, name: ranger.name }); })),
                        status: 200,
                    })));
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post:
                body.id = this.rangers.length;
                this.rangers.push(body);
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                    body: JSON.stringify(body),
                    status: 200,
                })));
                break;
            case __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put:
                if (Number.isInteger(id)) {
                    console.log(this.rangers);
                    var index = this.rangers.findIndex(function (ranger) { return ranger && ranger.id === id; });
                    if (index >= 0) {
                        this.rangers[index] = Object.assign({}, this.rangers[index], body);
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                            body: JSON.stringify(body),
                            status: 200,
                        })));
                    }
                    else {
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                            status: 404,
                            body: 'Invalid ID',
                        })));
                    }
                }
                else {
                    this.handleUnknown(connection);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete:
                if (Number.isInteger(id)) {
                    var index = this.rangers.findIndex(function (ranger) { return ranger.id === id; });
                    if (index >= 0) {
                        this.rangers = this.rangers.slice(0, index).concat(this.rangers.slice(index + 1));
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                            body: { message: 'Successfully deleted id ' + id },
                            status: 200,
                        })));
                    }
                    else {
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
                            status: 404,
                            body: 'Invalid ID',
                        })));
                    }
                }
                else {
                    this.handleUnknown(connection);
                }
                break;
            default:
                this.handleUnknown(connection);
        }
    };
    MockServerService.prototype.handleUnknown = function (connection) {
        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseOptions"]({
            status: 404,
            body: 'Unknown api endpoint',
        })));
    };
    return MockServerService;
}());
MockServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MockServerService);

//# sourceMappingURL=mockServer.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_services_connectEntity_service__ = __webpack_require__(187);
/* harmony export (immutable) */ __webpack_exports__["a"] = createGetRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["f"] = createGetRangerListQuery;
/* harmony export (immutable) */ __webpack_exports__["d"] = createCreateRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["c"] = createUpdateRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["e"] = createDeleteRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["b"] = rangerByIdSelector;
/* harmony export (immutable) */ __webpack_exports__["g"] = rangerListSelector;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
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
            rangersById: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_services_connectEntity_service__["b" /* arrayToObjectsById */])(response, function (ranger) { return ranger.id; }),
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_services_connectEntity_service__["c" /* objectsByIdToArray */])(s.entities1.rangersById);
}
//# sourceMappingURL=queries.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_connect_service__ = __webpack_require__(81);
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
        this.subscribe(this.config);
    };
    ConnectRequestDirective.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    ConnectRequestDirective.prototype.subscribe = function (config) {
        var _this = this;
        this.unsubscribe();
        this.subscription = this.connectService.requestAsync(config).subscribe(function (response) {
            if (_this.response) {
                _this.response.emit(response);
            }
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
    __metadata("design:type", Object)
], ConnectRequestDirective.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ConnectRequestDirective.prototype, "response", void 0);
ConnectRequestDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        exportAs: 'nqConnect',
        selector: '[nqConnect]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_connect_service__["a" /* ConnectService */]) === "function" && _b || Object])
], ConnectRequestDirective);

var _a, _b;
//# sourceMappingURL=connect.directive.js.map

/***/ }),

/***/ 313:
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

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_query_dist_commonjs_actions__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_query_dist_commonjs_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_query_dist_commonjs_actions__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return requestAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mutateAsync; });


;
;
var requestAsync = function (params) { return Object.assign({}, __WEBPACK_IMPORTED_MODULE_1_redux_query_dist_commonjs_actions__["requestAsync"](params), { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* REQUEST_ASYNC */] }); };
var mutateAsync = function (params) { return Object.assign({}, __WEBPACK_IMPORTED_MODULE_1_redux_query_dist_commonjs_actions__["mutateAsync"](params), { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* MUTATE_ASYNC */] }); };
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_range__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_zip__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_query__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxQueryModule", function() { return __WEBPACK_IMPORTED_MODULE_12__ngrx_query__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_effects_service__ = __webpack_require__(316);
/* unused harmony reexport NgrxQueryEffects */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_query_dist_commonjs_reducers_entities__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_query_dist_commonjs_reducers_entities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_redux_query_dist_commonjs_reducers_entities__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "entitiesReducer", function() { return __WEBPACK_IMPORTED_MODULE_14_redux_query_dist_commonjs_reducers_entities___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_redux_query_dist_commonjs_reducers_queries__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_redux_query_dist_commonjs_reducers_queries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_redux_query_dist_commonjs_reducers_queries__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "queriesReducer", function() { return __WEBPACK_IMPORTED_MODULE_15_redux_query_dist_commonjs_reducers_queries___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_redux_query_dist_commonjs_selectors_query__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_redux_query_dist_commonjs_selectors_query___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_redux_query_dist_commonjs_selectors_query__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_connect_service__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return __WEBPACK_IMPORTED_MODULE_17__services_connect_service__["a"]; });
/* unused harmony reexport ConnectRequestParams */
/* unused harmony reexport ConnectMutateParams */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_connectEntity_service__ = __webpack_require__(187);
/* unused harmony reexport ConnectEntityService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_connect_directive__ = __webpack_require__(312);
/* unused harmony reexport ConnectRequestDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers_config__ = __webpack_require__(80);
/* unused harmony reexport NGRX_QUERY_CONFIG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers_ngrxQueryConfig__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__helpers_ngrxQueryConfig__);
/* unused harmony reexport NgrxQueryConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__helpers_actions__ = __webpack_require__(314);
/* unused harmony reexport RequestParams */
/* unused harmony reexport MutateParams */
/* unused harmony reexport requestAsync */
/* unused harmony reexport mutateAsync */























//# sourceMappingURL=index.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_invariant__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_actionTypes__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_query_dist_commonjs_constants_action_types__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_query_dist_commonjs_constants_action_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_query_dist_commonjs_constants_action_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_redux_query_dist_commonjs_constants_http_methods__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_redux_query_dist_commonjs_constants_http_methods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_redux_query_dist_commonjs_constants_http_methods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_redux_query_dist_commonjs_lib_query_key__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_redux_query_dist_commonjs_lib_query_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_redux_query_dist_commonjs_lib_query_key__);
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
            var queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_redux_query_dist_commonjs_lib_query_key__["reconcileQueryKey"])(action);
            var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__["a" /* getLatest */])(_this.store);
            var queries = _this.config && _this.config.queriesSelector && _this.config.queriesSelector(state)
                || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_config__["c" /* defaultQueriesSelector */])(state);
            var queriesState = queries[queryKey];
            var _a = queriesState || {}, isPending = _a.isPending, status = _a.status;
            var hasSucceeded = status >= 200 && status < 300;
            var attemptRequest = force || !queriesState || (retry !== false && !isPending && !hasSucceeded);
            return { attemptRequest: attemptRequest, action: action };
        })
            .filter(function (_a) {
            var attemptRequest = _a.attemptRequest;
            return attemptRequest;
        })
            .mergeMap(function (_a) {
            var action = _a.action;
            var url = action.url, body = action.body, _b = action.transform, transform = _b === void 0 ? identity : _b, update = action.update, _c = action.options, options = _c === void 0 ? {} : _c, meta = action.meta;
            var queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_redux_query_dist_commonjs_lib_query_key__["reconcileQueryKey"])(action);
            var start = new Date();
            var _d = options.method, method = _d === void 0 ? __WEBPACK_IMPORTED_MODULE_12_redux_query_dist_commonjs_constants_http_methods__["GET"] : _d;
            var request = {
                url: url,
                method: method,
                body: body,
                headers: options.headers,
                withCredentials: options.credentials === 'include',
            };
            return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].of({})
                .mergeMap(function () {
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__["requestStart"](url, body, request, meta, queryKey));
                return _this.http.request(url, request)
                    .map(function (response) {
                    if (!response.ok) {
                        throw response;
                    }
                    return response;
                });
            })
                .map(function (response) {
                var callbackState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__["a" /* getLatest */])(_this.store);
                var entities = _this.config && _this.config.entitiesSelector && _this.config.entitiesSelector(callbackState)
                    || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_config__["a" /* defaultEntitiesSelector */])(callbackState);
                var transformed = transform(response.json(), response.text());
                var newEntities = updateEntities(update, entities, transformed);
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__["requestSuccess"](url, body, response.status, newEntities, meta, queryKey));
                var end = new Date();
                var duration = end.valueOf() - start.valueOf();
                return {
                    body: response.json(),
                    duration: duration,
                    entities: newEntities,
                    status: response.status,
                    text: response.text,
                    transformed: transformed,
                    type: __WEBPACK_IMPORTED_MODULE_11_redux_query_dist_commonjs_constants_action_types__["REQUEST_ASYNC"],
                };
            })
                .retryWhen(function (attempts) {
                var backoff = _this.config && _this.config.backoff || __WEBPACK_IMPORTED_MODULE_1__helpers_config__["d" /* defaultBackoffConfig */];
                var retryableStatusCodes = _this.config && _this.config.retryableStatusCodes || __WEBPACK_IMPORTED_MODULE_1__helpers_config__["e" /* defaultRetryableStatusCodes */];
                return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].range(1, backoff.maxAttempts + 1)
                    .zip(attempts, function (i, response) { return ({ response: response, i: i }); })
                    .flatMap(function (_a) {
                    var response = _a.response, i = _a.i;
                    if (i < backoff.maxAttempts && retryableStatusCodes.indexOf(response.status) >= 0) {
                        // Delay retry by min duration the first attempt, up to max duration on the (maxAttempts)th attempt
                        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].timer(backoff.minDuration +
                            (i - 1) * (backoff.maxDuration - backoff.minDuration) / backoff.maxAttempts);
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
                return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__["requestFailure"](url, body, errResponse.status, errResponse.text(), meta, queryKey));
            });
        });
        this.mutateAsync = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__helpers_actionTypes__["b" /* MUTATE_ASYNC */])
            .mergeMap(function (action) {
            var url = action.url, _a = action.transform, transform = _a === void 0 ? identity : _a, update = action.update, body = action.body, optimisticUpdate = action.optimisticUpdate, _b = action.options, options = _b === void 0 ? {} : _b;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_invariant__["a" /* invariant */])(!!url, 'Missing required `url` field in action handler');
            var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getLatest__["a" /* getLatest */])(_this.store);
            var entities = _this.config && _this.config.entitiesSelector && _this.config.entitiesSelector(state)
                || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_config__["a" /* defaultEntitiesSelector */])(state);
            var optimisticEntities;
            if (optimisticUpdate) {
                optimisticEntities = optimisticUpdateEntities(optimisticUpdate, entities);
            }
            var queryKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_redux_query_dist_commonjs_lib_query_key__["reconcileQueryKey"])(action);
            // const start = new Date();
            var _c = options.method, method = _c === void 0 ? __WEBPACK_IMPORTED_MODULE_12_redux_query_dist_commonjs_constants_http_methods__["POST"] : _c;
            var request = {
                url: url,
                method: method,
                body: body,
                headers: options.headers,
                withCredentials: options.credentials === 'include',
            };
            // Note: only the entities that are included in `optimisticUpdate` will be passed along in the
            // `mutateStart` action as `optimisticEntities`
            _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__["mutateStart"](url, body, request, optimisticEntities, queryKey));
            return _this.http.request(url, request)
                .map(function (response) {
                if (!response.ok) {
                    throw response;
                }
                var resStatus = (response && response.status) || 0;
                var resBody = (response && response.json()) || undefined;
                var resText = (response && response.text()) || undefined;
                var transformed = transform(resBody, resText);
                var newEntities = updateEntities(update, entities, transformed);
                return __WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__["mutateSuccess"](url, body, resStatus, newEntities, queryKey);
            })
                .catch(function (errResponse) { return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_10_redux_query_dist_commonjs_actions__["mutateFailure"](url, body, errResponse.status, entities, queryKey)); });
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

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_module__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(469);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__demo_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ranger_queries__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_services_connect_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mockServer__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(connectService, mockServer) {
        this.connectService = connectService;
        this.mockServer = mockServer;
        this.config = Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ranger_queries__["f" /* createGetRangerListQuery */])(), { selector: __WEBPACK_IMPORTED_MODULE_0__ranger_queries__["g" /* rangerListSelector */] });
        this.serverState = __WEBPACK_IMPORTED_MODULE_2__mockServer__["b" /* SERVER_STATE */];
    }
    AppComponent.prototype.log = function (message) {
        console.log(message);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'nq-demo',
        styles: [__webpack_require__(526)],
        template: __webpack_require__(534),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib_services_connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib_services_connect_service__["a" /* ConnectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mockServer__["a" /* MockServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mockServer__["a" /* MockServerService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ranger_ranger_detail_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ranger_ranger_list_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_testing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_http_testing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mockServer__ = __webpack_require__(310);
/* unused harmony export httpFactory */
/* unused harmony export entitiesSelector */
/* unused harmony export queriesSelector */
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
    return new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"](backend, options);
}
function entitiesSelector(state) {
    return state.entities1;
}
function queriesSelector(state) {
    return state.queries1;
}
var AppModule = (function () {
    function AppModule(appRef, mockBackend, mockServer) {
        var _this = this;
        this.appRef = appRef;
        this.mockBackend = mockBackend;
        this.mockServer = mockServer;
        mockBackend.connections.subscribe(function (connection) {
            _this.mockServer.handleConnection(connection);
        });
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_1__ranger_ranger_list_component__["a" /* RangerListComponent */],
            __WEBPACK_IMPORTED_MODULE_0__ranger_ranger_detail_component__["a" /* RangerDetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["a" /* StoreModule */].provideStore({
                entities1: __WEBPACK_IMPORTED_MODULE_2__lib__["entitiesReducer"],
                queries1: __WEBPACK_IMPORTED_MODULE_2__lib__["queriesReducer"],
            }),
            __WEBPACK_IMPORTED_MODULE_2__lib__["NgrxQueryModule"].forRoot({
                entitiesSelector: entitiesSelector,
                queriesSelector: queriesSelector,
            }),
            __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["BaseRequestOptions"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__["MockBackend"],
            {
                deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http_testing__["MockBackend"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["BaseRequestOptions"]],
                provide: __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"],
                useFactory: httpFactory,
            },
            __WEBPACK_IMPORTED_MODULE_11__mockServer__["a" /* MockServerService */],
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__["MockBackend"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__["MockBackend"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__mockServer__["a" /* MockServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__mockServer__["a" /* MockServerService */]) === "function" && _c || Object])
], AppModule);

var _a, _b, _c;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangerDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RangerDetailComponent = (function () {
    function RangerDetailComponent() {
        this.ranger = undefined;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return RangerDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RangerDetailComponent.prototype, "ranger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RangerDetailComponent.prototype, "refresh", void 0);
RangerDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nq-ranger-detail',
        template: __webpack_require__(535)
    })
], RangerDetailComponent);

var _a;
//# sourceMappingURL=ranger-detail.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queries__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangerListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RangerListComponent = (function () {
    function RangerListComponent(connectService) {
        this.connectService = connectService;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.showRangers = {};
        this.newRanger = {};
    }
    RangerListComponent.prototype.getDetailsQuery = function (id) {
        return Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["a" /* createGetRangerQuery */])(id), { selector: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["b" /* rangerByIdSelector */])(id) });
    };
    RangerListComponent.prototype.edit = function (ranger) {
        var updatedRanger = Object.assign({}, ranger, { name: ranger.name + ' Edited' });
        var mutateQuery = Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["c" /* createUpdateRangerQuery */])(updatedRanger), { selector: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["b" /* rangerByIdSelector */])(ranger.id) });
        this.connectService.mutateAsync(mutateQuery);
    };
    RangerListComponent.prototype.create = function (ranger) {
        var mutateQuery = Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["d" /* createCreateRangerQuery */])(ranger));
        this.connectService.mutateAsync(mutateQuery);
        this.newRanger = {};
    };
    RangerListComponent.prototype.delete = function (id) {
        var mutateQuery = Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queries__["e" /* createDeleteRangerQuery */])(id));
        this.connectService.mutateAsync(mutateQuery);
    };
    return RangerListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RangerListComponent.prototype, "rangers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RangerListComponent.prototype, "refresh", void 0);
RangerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'nq-ranger-list',
        template: __webpack_require__(536)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["ConnectService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["ConnectService"]) === "function" && _b || Object])
], RangerListComponent);

var _a, _b;
//# sourceMappingURL=ranger-list.component.js.map

/***/ }),

/***/ 469:
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

/***/ 470:
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

/***/ 471:
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_connectEntity_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_connect_directive__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_connect_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_effects_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__(298);
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
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__helpers_config__["b" /* NGRX_QUERY_CONFIG */], useValue: config },
                __WEBPACK_IMPORTED_MODULE_3__services_connect_service__["a" /* ConnectService */],
                __WEBPACK_IMPORTED_MODULE_0__services_connectEntity_service__["a" /* ConnectEntityService */],
            ],
        };
    };
    return NgrxQueryModule;
}());
NgrxQueryModule = NgrxQueryModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__directives_connect_directive__["a" /* ConnectRequestDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__directives_connect_directive__["a" /* ConnectRequestDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_4__services_effects_service__["a" /* NgrxQueryEffects */]),
        ],
    })
], NgrxQueryModule);

var NgrxQueryModule_1;
//# sourceMappingURL=ngrx-query.js.map

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

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1 class=\"title\">Ngrx Query</h1>\n</header>\n<main>\n  <h3>Server Status</h3>\n  <label><input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.ON\">On</label><br>\n  <label><input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.BUSY\">Busy</label><br>\n  <label><input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.ERROR\">Error</label><br>\n\n  <h3>Connected Element/Component</h3>\n  <label for=\"isShown\">Show List?</label> <input id=\"isShown\" type=\"checkbox\" [(ngModel)]=\"isShown\">\n  <nq-ranger-list *ngIf=\"isShown\" [nqConnect]=\"config\" #list (response)=\"list.rangers = $event;\" #connect=\"nqConnect\" (refresh)=\"connect.forceRequest()\">\n  </nq-ranger-list>\n</main>\n<footer>\n  <a href=\"https://github.com/isaacplmann/ngrx-query\">Ngrx Query</a>\n</footer>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<strong>Favorite Color:</strong> {{ranger?.color}}\n<button (click)=\"refresh.emit({})\">Refresh</button>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<button (click)=\"refresh.emit({})\">Refresh</button>\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Actions</th>\n  </tr>\n  <tbody *ngFor=\"let ranger of rangers\">\n    <tr>\n      <td>{{ranger.name}}</td>\n      <td>\n        <button (click)=\"showRangers[ranger.id] = !showRangers[ranger.id]\">{{ showRangers[ranger.id] ? 'Hide' : 'Show' }} Details</button>\n        <button (click)=\"edit(ranger)\">Edit</button>\n        <button (click)=\"delete(ranger.id)\">Delete</button>\n      </td>\n    </tr>\n    <tr *ngIf=\"showRangers[ranger.id]\">\n      <td colspan=\"2\">\n        <nq-ranger-detail [nqConnect]=\"getDetailsQuery(ranger.id)\" #detail (response)=\"detail.ranger = $event;\" #connect=\"nqConnect\" (refresh)=\"connect.forceRequest()\"></nq-ranger-detail>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Add person</h3>\n<label for=\"name\">Name</label><br>\n<input type=\"text\" id=\"name\" [(ngModel)]=\"newRanger.name\" placeholder=\"i.e. Tommy\"><br>\n<label for=\"color\">Color</label><br>\n<input type=\"text\" [(ngModel)]=\"newRanger.color\" placeholder=\"i.e. green\"><br>\n<button (click)=\"create(newRanger)\">Add</button>\n"

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export statusCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NGRX_QUERY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultEntitiesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultQueriesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultBackoffConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultRetryableStatusCodes; });

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
var defaultBackoffConfig = {
    maxAttempts: 5,
    maxDuration: 5000,
    minDuration: 300,
};
var defaultRetryableStatusCodes = [
    statusCodes.UNKNOWN,
    statusCodes.REQUEST_TIMEOUT,
    statusCodes.TOO_MANY_REQUESTS,
    statusCodes.SERVICE_UNAVAILABLE,
    statusCodes.GATEWAY_TIMEOUT,
];
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_actions__ = __webpack_require__(314);
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
        return this.store.select(selector || this.config && this.config.entitiesSelector || __WEBPACK_IMPORTED_MODULE_2__helpers_config__["a" /* defaultEntitiesSelector */]);
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

/***/ })

},[596]);
//# sourceMappingURL=main.bundle.js.map