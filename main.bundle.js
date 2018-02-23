webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/demo/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1 class=\"title\">Ngrx Query</h1>\n</header>\n<aside>\n  <nq-queries-list></nq-queries-list>\n</aside>\n<main>\n  <h3>Server Status</h3>\n  <label>\n    <input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.ON\">On</label>\n  <br>\n  <label>\n    <input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.BUSY\">Busy</label>\n  <br>\n  <label>\n    <input type=\"radio\" [(ngModel)]=\"mockServer.state\" name=\"serverState\" [value]=\"serverState.ERROR\">Error</label>\n  <br>\n\n  <p>Open the console to see the fake server calls (using MockBackend).</p>\n\n  <h3>Connected Element/Component</h3>\n  <label for=\"isShown\">Show List?</label>\n  <input id=\"isShown\" type=\"checkbox\" [(ngModel)]=\"isShown\">\n  <nq-ranger-list *ngIf=\"isShown\" rangerListData></nq-ranger-list>\n</main>\n<footer>\n  <a href=\"https://github.com/isaacplmann/ngrx-query\">Ngrx Query</a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/demo/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n  font-family: sans-serif; }\n\nmain {\n  padding: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block; }\n\naside {\n  float: right;\n  width: 300px; }\n\nfooter {\n  text-align: center;\n  font-size: 0.8em;\n  width: 100%;\n  position: absolute;\n  bottom: 20px; }\n\nfooter a {\n  text-decoration: none;\n  font-family: sans-serif; }\n\nfooter a:hover {\n  text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_services_connect_service__ = __webpack_require__("../../../../../src/lib/services/connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockServer__ = __webpack_require__("../../../../../src/demo/mockServer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(connectService, mockServer) {
        this.connectService = connectService;
        this.mockServer = mockServer;
        this.serverState = __WEBPACK_IMPORTED_MODULE_1__mockServer__["b" /* SERVER_STATE */];
    }
    AppComponent.prototype.log = function (message) {
        console.log(message);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            selector: 'nq-demo',
            styles: [__webpack_require__("../../../../../src/demo/app.component.scss")],
            template: __webpack_require__("../../../../../src/demo/app.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__lib_services_connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__lib_services_connect_service__["a" /* ConnectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__mockServer__["a" /* MockServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mockServer__["a" /* MockServerService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export entitiesSelector */
/* harmony export (immutable) */ __webpack_exports__["b"] = queriesSelector;
/* unused harmony export saveMockData */
/* unused harmony export getMockData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/demo/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mockServer__ = __webpack_require__("../../../../../src/demo/mockServer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__networkLogger_service__ = __webpack_require__("../../../../../src/demo/networkLogger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__queriesList_queries_list_component__ = __webpack_require__("../../../../../src/demo/queriesList/queries-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ranger_ranger_detail_component__ = __webpack_require__("../../../../../src/demo/ranger/ranger-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ranger_ranger_list_component__ = __webpack_require__("../../../../../src/demo/ranger/ranger-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ranger_ranger_list_data_directive__ = __webpack_require__("../../../../../src/demo/ranger/ranger-list.data.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















function entitiesSelector(state) {
    return state.entities1;
}
function queriesSelector(state) {
    return state.queries1;
}
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__queriesList_queries_list_component__["a" /* QueriesListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ranger_ranger_list_component__["a" /* RangerListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__ranger_ranger_detail_component__["a" /* RangerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__ranger_ranger_list_data_directive__["a" /* RangerListDataDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["i" /* StoreModule */].forRoot({
                    entities1: __WEBPACK_IMPORTED_MODULE_8__lib__["entitiesReducer"],
                    queries1: __WEBPACK_IMPORTED_MODULE_8__lib__["queriesReducer"],
                }),
                __WEBPACK_IMPORTED_MODULE_8__lib__["NgrxQueryModule"].forRoot({
                    entitiesSelector: entitiesSelector,
                    queriesSelector: queriesSelector,
                    mock: {
                        mode: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].mockMode,
                        saveMockData: saveMockData,
                        getMockData: getMockData,
                    },
                }),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__mockServer__["a" /* MockServerService */],
                __WEBPACK_IMPORTED_MODULE_11__networkLogger_service__["a" /* NetworkLoggerService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__networkLogger_service__["a" /* NetworkLoggerService */],
                    multi: true,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useExisting: __WEBPACK_IMPORTED_MODULE_10__mockServer__["a" /* MockServerService */],
                    multi: true,
                },
            ],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* ApplicationRef */]) === "function" && _a || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/demo/mockServer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestMethod */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERVER_STATE; });
/* unused harmony export defaultRangers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                status: 429,
                body: { error: 'Too many requests' },
            }));
        }
        else if (this.state === SERVER_STATE.UNAUTHORIZED) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                status: 401,
                body: { error: 'Unauthorized' },
            }));
        }
        else if (this.state === SERVER_STATE.ERROR) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                status: 500,
                body: { error: 'Internal server error' },
            }));
        }
        switch (method) {
            case RequestMethod.Get:
                if (Number.isInteger(id)) {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                        body: this.rangers.find(function (ranger) { return ranger.id === id; }),
                        status: 200,
                    }));
                }
                else {
                    return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                        body: this.rangers.map(function (ranger) { return ({ id: ranger.id, name: ranger.name }); }),
                        status: 200,
                    }));
                }
            case RequestMethod.Post:
                body.id = this.rangers.length;
                this.rangers.push(body);
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                    body: body,
                    status: 200,
                }));
            case RequestMethod.Put:
                if (Number.isInteger(id)) {
                    console.log(this.rangers);
                    var index = this.rangers.findIndex(function (ranger) { return ranger && ranger.id === id; });
                    if (index >= 0) {
                        this.rangers[index] = Object.assign({}, this.rangers[index], body);
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                            body: body,
                            status: 200,
                        }));
                    }
                    else {
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
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
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
                            body: { message: 'Successfully deleted id ' + id },
                            status: 200,
                        }));
                    }
                    else {
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
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
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpResponse */]({
            status: 404,
            body: 'Unknown api endpoint',
        }));
    };
    MockServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])()
    ], MockServerService);
    return MockServerService;
}());

//# sourceMappingURL=mockServer.js.map

/***/ }),

/***/ "../../../../../src/demo/networkLogger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkLoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        return next.handle(req).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* filter */])(function (event) { return event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpEventType */].Response; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["h" /* tap */])(function (response) { return console.log(response.status || 200, response.body); }));
    };
    NetworkLoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], NetworkLoggerService);
    return NetworkLoggerService;
}());

//# sourceMappingURL=networkLogger.service.js.map

/***/ }),

/***/ "../../../../../src/demo/queriesList/queries-list.component.html":
/***/ (function(module, exports) {

module.exports = "Queries\n<dl *ngIf=\"queriesList$ | async as queriesList\">\n  <ng-container *ngFor=\"let key of getKeys(queriesList)\">\n    <dt>{{key}}</dt>\n    <dd [id]=\"key\">{{queriesList[key] | json}}</dd>\n  </ng-container>\n</dl>\n"

/***/ }),

/***/ "../../../../../src/demo/queriesList/queries-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueriesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__("../../../../../src/demo/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_services_connect_service__ = __webpack_require__("../../../../../src/lib/services/connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueriesListComponent = /** @class */ (function () {
    function QueriesListComponent(connectService) {
        this.connectService = connectService;
        this.queriesList$ = connectService.select(__WEBPACK_IMPORTED_MODULE_0__app_module__["b" /* queriesSelector */]);
    }
    QueriesListComponent.prototype.getKeys = function (object) {
        return Object.keys(object);
    };
    QueriesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'nq-queries-list',
            template: __webpack_require__("../../../../../src/demo/queriesList/queries-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib_services_connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib_services_connect_service__["a" /* ConnectService */]) === "function" && _a || Object])
    ], QueriesListComponent);
    return QueriesListComponent;
    var _a;
}());

//# sourceMappingURL=queries-list.component.js.map

/***/ }),

/***/ "../../../../../src/demo/ranger/queries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = createGetRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["c"] = createGetRangerListQuery;
/* harmony export (immutable) */ __webpack_exports__["a"] = createCreateRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["e"] = createUpdateRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["b"] = createDeleteRangerQuery;
/* harmony export (immutable) */ __webpack_exports__["f"] = rangerByIdSelector;
/* harmony export (immutable) */ __webpack_exports__["g"] = rangerListSelector;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_services_connectEntity_service__ = __webpack_require__("../../../../../src/lib/services/connectEntity.service.ts");
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
            rangersById: Object(__WEBPACK_IMPORTED_MODULE_0__lib_services_connectEntity_service__["b" /* arrayToObjectsById */])(response, function (ranger) { return ranger.id; }),
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
    return Object(__WEBPACK_IMPORTED_MODULE_0__lib_services_connectEntity_service__["c" /* objectsByIdToArray */])(s.entities1.rangersById);
}
//# sourceMappingURL=queries.js.map

/***/ }),

/***/ "../../../../../src/demo/ranger/ranger-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<strong>Favorite Color:</strong> {{nqData?.color}}\n<button [id]=\"'detailRefresh' + nqData?.id\" (click)=\"nqRefresh.emit({})\">Refresh</button>\n"

/***/ }),

/***/ "../../../../../src/demo/ranger/ranger-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RangerDetailComponent = /** @class */ (function () {
    function RangerDetailComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.nqData = undefined;
        this.nqRefresh = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    RangerDetailComponent_1 = RangerDetailComponent;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RangerDetailComponent.prototype, "nqData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], RangerDetailComponent.prototype, "nqRefresh", void 0);
    RangerDetailComponent = RangerDetailComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            providers: [Object(__WEBPACK_IMPORTED_MODULE_0__lib__["provideNqConnectedComponent"])(RangerDetailComponent_1)],
            selector: 'nq-ranger-detail',
            template: __webpack_require__("../../../../../src/demo/ranger/ranger-detail.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _b || Object])
    ], RangerDetailComponent);
    return RangerDetailComponent;
    var RangerDetailComponent_1, _a, _b;
}());

//# sourceMappingURL=ranger-detail.component.js.map

/***/ }),

/***/ "../../../../../src/demo/ranger/ranger-list.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"listRefresh\" (click)=\"nqRefresh.emit({})\">Refresh</button>\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Actions</th>\n  </tr>\n  <tbody *ngFor=\"let ranger of nqData\">\n    <tr>\n      <td>{{ranger.name}}</td>\n      <td>\n        <button (click)=\"showRangers[ranger.id] = !showRangers[ranger.id]\">{{ showRangers[ranger.id] ? 'Hide' : 'Show' }} Details</button>\n        <button (click)=\"edit(ranger)\">Edit</button>\n        <button (click)=\"delete(ranger.id)\">Delete</button>\n      </td>\n    </tr>\n    <tr *ngIf=\"showRangers[ranger.id]\">\n      <td colspan=\"2\">\n        <nq-ranger-detail [nqConnect]=\"getDetailsQuery(ranger.id)\"></nq-ranger-detail>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Add person</h3>\n<label for=\"name\">Name</label><br>\n<input type=\"text\" id=\"name\" [(ngModel)]=\"newRanger.name\" placeholder=\"i.e. Tommy\"><br>\n<label for=\"color\">Color</label><br>\n<input type=\"text\" id=\"color\" [(ngModel)]=\"newRanger.color\" placeholder=\"i.e. green\"><br>\n<button id=\"add\" (click)=\"create(newRanger)\">Add</button>\n"

/***/ }),

/***/ "../../../../../src/demo/ranger/ranger-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries__ = __webpack_require__("../../../../../src/demo/ranger/queries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RangerListComponent = /** @class */ (function () {
    function RangerListComponent(connectService, changeDetector) {
        this.connectService = connectService;
        this.changeDetector = changeDetector;
        this.nqRefresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.showRangers = {};
        this.newRanger = {};
    }
    RangerListComponent_1 = RangerListComponent;
    RangerListComponent.prototype.getDetailsQuery = function (id) {
        return Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1__queries__["d" /* createGetRangerQuery */])(id), { selector: Object(__WEBPACK_IMPORTED_MODULE_1__queries__["f" /* rangerByIdSelector */])(id) });
    };
    RangerListComponent.prototype.edit = function (ranger) {
        var updatedRanger = Object.assign({}, ranger, { name: ranger.name + ' Edited' });
        var mutateQuery = Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1__queries__["e" /* createUpdateRangerQuery */])(updatedRanger), { selector: Object(__WEBPACK_IMPORTED_MODULE_1__queries__["f" /* rangerByIdSelector */])(ranger.id) });
        this.connectService.mutateAsync(mutateQuery);
    };
    RangerListComponent.prototype.create = function (ranger) {
        var mutateQuery = Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1__queries__["a" /* createCreateRangerQuery */])(ranger));
        this.connectService.mutateAsync(mutateQuery);
        this.newRanger = {};
    };
    RangerListComponent.prototype.delete = function (id) {
        var mutateQuery = Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1__queries__["b" /* createDeleteRangerQuery */])(id));
        this.connectService.mutateAsync(mutateQuery);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], RangerListComponent.prototype, "nqData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], RangerListComponent.prototype, "nqRefresh", void 0);
    RangerListComponent = RangerListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            providers: [Object(__WEBPACK_IMPORTED_MODULE_2__lib__["provideNqConnectedComponent"])(RangerListComponent_1)],
            selector: 'nq-ranger-list',
            template: __webpack_require__("../../../../../src/demo/ranger/ranger-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__lib__["ConnectService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib__["ConnectService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _c || Object])
    ], RangerListComponent);
    return RangerListComponent;
    var RangerListComponent_1, _a, _b, _c;
}());

//# sourceMappingURL=ranger-list.component.js.map

/***/ }),

/***/ "../../../../../src/demo/ranger/ranger-list.data.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangerListDataDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_services_connect_service__ = __webpack_require__("../../../../../src/lib/services/connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queries__ = __webpack_require__("../../../../../src/demo/ranger/queries.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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





var RangerListDataDirective = /** @class */ (function (_super) {
    __extends(RangerListDataDirective, _super);
    function RangerListDataDirective(connect, changeDetector, host) {
        var _this = _super.call(this, connect, changeDetector, host) || this;
        _this.connect = connect;
        _this.changeDetector = changeDetector;
        _this.host = host;
        _this.config = Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_3__queries__["c" /* createGetRangerListQuery */])(), { selector: __WEBPACK_IMPORTED_MODULE_3__queries__["g" /* rangerListSelector */] });
        return _this;
    }
    RangerListDataDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[rangerListData]' }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lib_services_connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_services_connect_service__["a" /* ConnectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["NqConnectedComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["NqConnectedComponent"]) === "function" && _c || Object])
    ], RangerListDataDirective);
    return RangerListDataDirective;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__lib__["ConnectRequestDirective"]));

//# sourceMappingURL=ranger-list.data.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_helpers_mockMode__ = __webpack_require__("../../../../../src/lib/helpers/mockMode.ts");

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    mockMode: __WEBPACK_IMPORTED_MODULE_0__lib_helpers_mockMode__["a" /* MockMode */].None,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/lib/directives/connect.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectRequestDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_connect_service__ = __webpack_require__("../../../../../src/lib/services/connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connected_component__ = __webpack_require__("../../../../../src/lib/directives/connected.component.ts");
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





var ConnectRequestDirective = /** @class */ (function () {
    function ConnectRequestDirective(connectService, changeDetector, host) {
        this.connectService = connectService;
        this.changeDetector = changeDetector;
        this.host = host;
        // tslint:disable-next-line:no-input-rename
        this.config = undefined;
        this.response = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ConnectRequestDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe(this.config);
        if (this.host) {
            this.host.nqRefresh.subscribe(function () { return _this.forceRequest(); });
        }
    };
    ConnectRequestDirective.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
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
    ConnectRequestDirective.prototype.unsubscribe = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ConnectRequestDirective.prototype.forceRequest = function () {
        this.subscribe(Object.assign({}, this.config, { force: true }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('nqConnect'),
        __metadata("design:type", Object)
    ], ConnectRequestDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], ConnectRequestDirective.prototype, "response", void 0);
    ConnectRequestDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            exportAs: 'nqConnect',
            selector: '[nqConnect]',
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_connect_service__["a" /* ConnectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__connected_component__["a" /* NqConnectedComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__connected_component__["a" /* NqConnectedComponent */]) === "function" && _d || Object])
    ], ConnectRequestDirective);
    return ConnectRequestDirective;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=connect.directive.js.map

/***/ }),

/***/ "../../../../../src/lib/directives/connected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NqConnectedComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = provideNqConnectedComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var NqConnectedComponent = /** @class */ (function () {
    function NqConnectedComponent() {
    }
    return NqConnectedComponent;
}());

function provideNqConnectedComponent(component, parentType) {
    return { provide: parentType || NqConnectedComponent, useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return component; }) };
}
;
//# sourceMappingURL=connected.component.js.map

/***/ }),

/***/ "../../../../../src/lib/helpers/actionTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MUTATE_ASYNC; });
/* unused harmony export CANCEL_QUERY */
/* unused harmony export RESET */
var REQUEST_ASYNC = '[ngrx-query] REQUEST_ASYNC';
var MUTATE_ASYNC = '[ngrx-query] MUTATE_ASYNC';
var CANCEL_QUERY = '[ngrx-query] CANCEL_QUERY';
var RESET = '[ngrx-query] RESET';
//# sourceMappingURL=actionTypes.js.map

/***/ }),

/***/ "../../../../../src/lib/helpers/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return requestAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mutateAsync; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__("../../../../../src/lib/helpers/actionTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_query_dist_es_actions__ = __webpack_require__("../../../../redux-query/dist/es/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_query_dist_es_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_query_dist_es_actions__);


;
;
var requestAsync = function (params) { return Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1_redux_query_dist_es_actions__["requestAsync"])(params), { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* REQUEST_ASYNC */] }); };
var mutateAsync = function (params) { return Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1_redux_query_dist_es_actions__["mutateAsync"])(params), { type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* MUTATE_ASYNC */] }); };
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/lib/helpers/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export statusCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGRX_QUERY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultEntitiesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultQueriesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultBackoffConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultRetryableStatusCodes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var statusCodes = {
    GATEWAY_TIMEOUT: 504,
    REQUEST_TIMEOUT: 408,
    SERVICE_UNAVAILABLE: 503,
    TOO_MANY_REQUESTS: 429,
    UNKNOWN: 0,
};
var NGRX_QUERY_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('NGRX_QUERY_CONFIG');
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

/***/ "../../../../../src/lib/helpers/getLatest.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");

function getLatest(o$) {
    var result;
    o$.pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["g" /* take */])(1)).subscribe(function (x) { return result = x; });
    return result;
}
//# sourceMappingURL=getLatest.js.map

/***/ }),

/***/ "../../../../../src/lib/helpers/invariant.ts":
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

/***/ "../../../../../src/lib/helpers/mockMode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockMode; });
var MockMode;
(function (MockMode) {
    MockMode[MockMode["None"] = 0] = "None";
    MockMode[MockMode["Record"] = 1] = "Record";
    MockMode[MockMode["Mock"] = 2] = "Mock";
})(MockMode || (MockMode = {}));
//# sourceMappingURL=mockMode.js.map

/***/ }),

/***/ "../../../../../src/lib/helpers/ngrxQueryConfig.ts":
/***/ (function(module, exports) {

;
;
//# sourceMappingURL=ngrxQueryConfig.js.map

/***/ }),

/***/ "../../../../../src/lib/helpers/ofType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ofType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");

var ofType = function (actionType) { return function (source) {
    return source.pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["b" /* filter */])(function (action) { return action.type === actionType; }));
}; };
//# sourceMappingURL=ofType.js.map

/***/ }),

/***/ "../../../../../src/lib/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_query__ = __webpack_require__("../../../../../src/lib/ngrx-query.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxQueryModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ngrx_query__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_effects_service__ = __webpack_require__("../../../../../src/lib/services/effects.service.ts");
/* unused harmony reexport NgrxQueryEffects */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_query_dist_es_reducers_entities__ = __webpack_require__("../../../../redux-query/dist/es/reducers/entities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_query_dist_es_reducers_entities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_query_dist_es_reducers_entities__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "entitiesReducer", function() { return __WEBPACK_IMPORTED_MODULE_2_redux_query_dist_es_reducers_entities___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_query_dist_es_reducers_queries__ = __webpack_require__("../../../../redux-query/dist/es/reducers/queries.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_query_dist_es_reducers_queries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_query_dist_es_reducers_queries__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "queriesReducer", function() { return __WEBPACK_IMPORTED_MODULE_3_redux_query_dist_es_reducers_queries___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_selectors_query__ = __webpack_require__("../../../../redux-query/dist/es/selectors/query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_selectors_query___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_selectors_query__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_connect_service__ = __webpack_require__("../../../../../src/lib/services/connect.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return __WEBPACK_IMPORTED_MODULE_5__services_connect_service__["a"]; });
/* unused harmony reexport ConnectRequestParams */
/* unused harmony reexport ConnectMutateParams */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_connectEntity_service__ = __webpack_require__("../../../../../src/lib/services/connectEntity.service.ts");
/* unused harmony reexport ConnectEntityService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_connect_directive__ = __webpack_require__("../../../../../src/lib/directives/connect.directive.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectRequestDirective", function() { return __WEBPACK_IMPORTED_MODULE_7__directives_connect_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_connected_component__ = __webpack_require__("../../../../../src/lib/directives/connected.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NqConnectedComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__directives_connected_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "provideNqConnectedComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__directives_connected_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_config__ = __webpack_require__("../../../../../src/lib/helpers/config.ts");
/* unused harmony reexport NGRX_QUERY_CONFIG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_ngrxQueryConfig__ = __webpack_require__("../../../../../src/lib/helpers/ngrxQueryConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__helpers_ngrxQueryConfig__);
/* unused harmony reexport NgrxQueryConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_actions__ = __webpack_require__("../../../../../src/lib/helpers/actions.ts");
/* unused harmony reexport RequestParams */
/* unused harmony reexport MutateParams */
/* unused harmony reexport requestAsync */
/* unused harmony reexport mutateAsync */












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/lib/ngrx-query.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxQueryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_connect_directive__ = __webpack_require__("../../../../../src/lib/directives/connect.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_config__ = __webpack_require__("../../../../../src/lib/helpers/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_connect_service__ = __webpack_require__("../../../../../src/lib/services/connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_connectEntity_service__ = __webpack_require__("../../../../../src/lib/services/connectEntity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_effects_service__ = __webpack_require__("../../../../../src/lib/services/effects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NgrxQueryModule = /** @class */ (function () {
    function NgrxQueryModule() {
    }
    NgrxQueryModule_1 = NgrxQueryModule;
    /* optional: in case you need users to override your providers */
    NgrxQueryModule.forRoot = function (config) {
        return {
            ngModule: NgrxQueryModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__helpers_config__["a" /* NGRX_QUERY_CONFIG */], useValue: config },
                __WEBPACK_IMPORTED_MODULE_5__services_connect_service__["a" /* ConnectService */],
                __WEBPACK_IMPORTED_MODULE_6__services_connectEntity_service__["a" /* ConnectEntityService */],
            ],
        };
    };
    NgrxQueryModule = NgrxQueryModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__directives_connect_directive__["a" /* ConnectRequestDirective */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_connect_directive__["a" /* ConnectRequestDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_7__services_effects_service__["a" /* NgrxQueryEffects */]]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
            ],
        })
    ], NgrxQueryModule);
    return NgrxQueryModule;
    var NgrxQueryModule_1;
}());

//# sourceMappingURL=ngrx-query.js.map

/***/ }),

/***/ "../../../../../src/lib/services/connect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__ = __webpack_require__("../../../../../src/lib/helpers/ngrxQueryConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_actions__ = __webpack_require__("../../../../../src/lib/helpers/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_config__ = __webpack_require__("../../../../../src/lib/helpers/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
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





var ConnectService = /** @class */ (function () {
    function ConnectService(store, config) {
        this.store = store;
        this.config = config;
    }
    ConnectService.prototype.mutateAsync = function (config) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_actions__["a" /* mutateAsync */])(config));
        return this.select(config.selector);
    };
    ConnectService.prototype.requestAsync = function (config) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_actions__["b" /* requestAsync */])(config));
        return this.select(config.selector);
    };
    ConnectService.prototype.select = function (selector) {
        return this.store.select(selector || this.config && this.config.entitiesSelector || __WEBPACK_IMPORTED_MODULE_2__helpers_config__["c" /* defaultEntitiesSelector */]);
    };
    ConnectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__helpers_config__["a" /* NGRX_QUERY_CONFIG */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__["NgrxQueryConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__helpers_ngrxQueryConfig__["NgrxQueryConfig"]) === "function" && _b || Object])
    ], ConnectService);
    return ConnectService;
    var _a, _b;
}());

//# sourceMappingURL=connect.service.js.map

/***/ }),

/***/ "../../../../../src/lib/services/connectEntity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = objectsByIdToArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = arrayToObjectsById;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectEntityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_query_dist_es_reducers_entities__ = __webpack_require__("../../../../redux-query/dist/es/reducers/entities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_query_dist_es_reducers_entities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_query_dist_es_reducers_entities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connect_service__ = __webpack_require__("../../../../../src/lib/services/connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
var ConnectEntityService = /** @class */ (function () {
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
            options: {
                method: 'PUT',
            },
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
                _a[this.config.entityTypeName] = function (prevEntities) { return Object(__WEBPACK_IMPORTED_MODULE_0_redux_query_dist_es_reducers_entities__["withoutPath"])(prevEntities, [id]); },
                _a),
            options: {
                method: 'DELETE',
            },
            update: (_b = {},
                _b[this.config.entityTypeName] = function (prevEntities) { return Object(__WEBPACK_IMPORTED_MODULE_0_redux_query_dist_es_reducers_entities__["withoutPath"])(prevEntities, [id]); },
                _b),
            url: this.config.endpoints.remove(id + ''),
        });
        var _a, _b;
    };
    ConnectEntityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__connect_service__["a" /* ConnectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__connect_service__["a" /* ConnectService */]) === "function" && _a || Object])
    ], ConnectEntityService);
    return ConnectEntityService;
    var _a;
}());

//# sourceMappingURL=connectEntity.service.js.map

/***/ }),

/***/ "../../../../../src/lib/services/effects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export identity */
/* unused harmony export optimisticUpdateEntities */
/* unused harmony export updateEntities */
/* unused harmony export getPendingQueries */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxQueryEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__ = __webpack_require__("../../../../redux-query/dist/es/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_query_dist_es_constants_action_types__ = __webpack_require__("../../../../redux-query/dist/es/constants/action-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_query_dist_es_constants_action_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_query_dist_es_constants_action_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_query_dist_es_constants_http_methods__ = __webpack_require__("../../../../redux-query/dist/es/constants/http-methods.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_query_dist_es_constants_http_methods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_query_dist_es_constants_http_methods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux_query_dist_es_lib_query_key__ = __webpack_require__("../../../../redux-query/dist/es/lib/query-key.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux_query_dist_es_lib_query_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_redux_query_dist_es_lib_query_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_range__ = __webpack_require__("../../../../rxjs/_esm5/observable/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_actionTypes__ = __webpack_require__("../../../../../src/lib/helpers/actionTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__helpers_config__ = __webpack_require__("../../../../../src/lib/helpers/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_getLatest__ = __webpack_require__("../../../../../src/lib/helpers/getLatest.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__helpers_invariant__ = __webpack_require__("../../../../../src/lib/helpers/invariant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__helpers_ngrxQueryConfig__ = __webpack_require__("../../../../../src/lib/helpers/ngrxQueryConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__helpers_ngrxQueryConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__helpers_ngrxQueryConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_mockMode__ = __webpack_require__("../../../../../src/lib/helpers/mockMode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_ofType__ = __webpack_require__("../../../../../src/lib/helpers/ofType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers_config__ = __webpack_require__("../../../../../src/lib/helpers/config.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





















function identity(x, y, z) {
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
var NgrxQueryEffects = /** @class */ (function () {
    // @Effect() public cancelQuery: Observable<Action> = this.actions$;
    // @Effect() public reset: Observable<Action> = this.actions$;
    function NgrxQueryEffects(actions$, store, http, config) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.http = http;
        this.config = config;
        this.requestAsync = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_19__helpers_ofType__["a" /* ofType */])(__WEBPACK_IMPORTED_MODULE_13__helpers_actionTypes__["b" /* REQUEST_ASYNC */]), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["d" /* map */])(function (action) {
            var url = action.url, force = action.force, retry = action.retry, update = action.update;
            Object(__WEBPACK_IMPORTED_MODULE_16__helpers_invariant__["a" /* invariant */])(!!url, 'Missing required `url` field in action handler');
            Object(__WEBPACK_IMPORTED_MODULE_16__helpers_invariant__["a" /* invariant */])(!!update, 'Missing required `update` field in action handler');
            var queryKey = Object(__WEBPACK_IMPORTED_MODULE_7_redux_query_dist_es_lib_query_key__["getQueryKey"])(action);
            var state = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_getLatest__["a" /* getLatest */])(_this.store);
            var queries = _this.config && _this.config.queriesSelector && _this.config.queriesSelector(state)
                || Object(__WEBPACK_IMPORTED_MODULE_20__helpers_config__["d" /* defaultQueriesSelector */])(state);
            var queriesState = queries[queryKey];
            var _a = queriesState || {}, isPending = _a.isPending, status = _a.status;
            var hasSucceeded = status >= 200 && status < 300;
            var attemptRequest = force || !queriesState || (retry !== false && !isPending && !hasSucceeded);
            return { attemptRequest: attemptRequest, action: action };
        }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["b" /* filter */])(function (_a) {
            var attemptRequest = _a.attemptRequest;
            return attemptRequest;
        }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["e" /* mergeMap */])(function (_a) {
            var action = _a.action;
            var url = action.url, body = action.body, _b = action.transform, transform = _b === void 0 ? identity : _b, update = action.update, _c = action.options, options = _c === void 0 ? {} : _c, meta = action.meta;
            var queryKey = Object(__WEBPACK_IMPORTED_MODULE_7_redux_query_dist_es_lib_query_key__["getQueryKey"])(action);
            var start = new Date();
            var _d = options.method, method = _d === void 0 ? __WEBPACK_IMPORTED_MODULE_6_redux_query_dist_es_constants_http_methods__["GET"] : _d;
            var request = {
                body: body,
                headers: options.headers,
                method: method,
                observe: (options.observe || 'response'),
                responseType: options.responseType,
                url: url,
                withCredentials: options.credentials === 'include',
            };
            return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["a" /* of */])({}).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["h" /* tap */])(function () {
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["requestStart"]({ url: url, body: body, request: request, meta: meta, queryKey: queryKey }));
            }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["b" /* filter */])(function () {
                if (_this.config && _this.config.mock && _this.config.mock.mode === __WEBPACK_IMPORTED_MODULE_18__helpers_mockMode__["a" /* MockMode */].Mock) {
                    var mockActions = _this.config.mock.getMockData(queryKey);
                    if (mockActions) {
                        mockActions.forEach(function (mockAction) {
                            _this.store.dispatch(mockAction);
                        });
                    }
                    else {
                        _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["requestFailure"]({
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
            }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["e" /* mergeMap */])(function () {
                return _this.http.request(request.method, url, request)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["d" /* map */])(function (response) {
                    if (!response.ok) {
                        throw response;
                    }
                    return response;
                }));
            }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["d" /* map */])(function (response) {
                var callbackState = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_getLatest__["a" /* getLatest */])(_this.store);
                var entities = _this.config && _this.config.entitiesSelector && _this.config.entitiesSelector(callbackState)
                    || Object(__WEBPACK_IMPORTED_MODULE_20__helpers_config__["c" /* defaultEntitiesSelector */])(callbackState);
                var parsedResponse = response.body;
                var transformed = transform(parsedResponse, response.body, response);
                var newEntities = updateEntities(update, entities, transformed);
                var requestSuccessAction = __WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["requestSuccess"]({
                    url: url, body: body, status: response.status, entities: newEntities, meta: meta, queryKey: queryKey, responseBody: parsedResponse,
                    responseText: response.body, responseHeaders: response.headers
                });
                _this.store.dispatch(requestSuccessAction);
                var end = new Date();
                var duration = end.valueOf() - start.valueOf();
                var requestAsyncAction = {
                    body: parsedResponse,
                    duration: duration,
                    entities: newEntities,
                    meta: meta,
                    status: response.status,
                    text: response.body,
                    transformed: transformed,
                    type: __WEBPACK_IMPORTED_MODULE_5_redux_query_dist_es_constants_action_types__["REQUEST_ASYNC"],
                };
                if (_this.config && _this.config.mock && _this.config.mock.mode === __WEBPACK_IMPORTED_MODULE_18__helpers_mockMode__["a" /* MockMode */].Record) {
                    _this.config.mock.saveMockData(queryKey, [requestSuccessAction, requestAsyncAction]);
                }
                return requestAsyncAction;
            }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["f" /* retryWhen */])(function (attempts) {
                var backoff = _this.config && _this.config.backoff || __WEBPACK_IMPORTED_MODULE_20__helpers_config__["b" /* defaultBackoffConfig */];
                var retryableStatusCodes = _this.config && _this.config.retryableStatusCodes || __WEBPACK_IMPORTED_MODULE_20__helpers_config__["e" /* defaultRetryableStatusCodes */];
                return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_range__["a" /* range */])(1, backoff.maxAttempts + 1).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["i" /* zip */])(attempts, function (i, response) { return ({ response: response, i: i }); }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["c" /* flatMap */])(function (_a) {
                    var response = _a.response, i = _a.i;
                    if (i < backoff.maxAttempts && retryableStatusCodes.indexOf(response.status) >= 0) {
                        // Delay retry by min duration the first attempt, up to max duration on the (maxAttempts)th attempt
                        return Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_timer__["a" /* timer */])(backoff.minDuration +
                            (i - 1) * (backoff.maxDuration - backoff.minDuration) / backoff.maxAttempts);
                    }
                    else {
                        // Tried maxAttempts, now fail
                        throw response;
                    }
                }));
            }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["a" /* catchError */])(function (errResponse, caught) {
                if (errResponse.error instanceof Error) {
                    throw errResponse.error;
                }
                var requestFailureAction = __WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["requestFailure"]({
                    url: url,
                    body: body,
                    status: errResponse.status,
                    responseBody: errResponse.error,
                    meta: meta,
                    queryKey: queryKey,
                    responseText: errResponse.error,
                    responseHeaders: errResponse.headers
                });
                if (_this.config && _this.config.mock && _this.config.mock.mode === __WEBPACK_IMPORTED_MODULE_18__helpers_mockMode__["a" /* MockMode */].Record) {
                    _this.config.mock.saveMockData(queryKey, [requestFailureAction]);
                }
                return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["a" /* of */])(requestFailureAction);
            }));
        }));
        this.mutateAsync = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_19__helpers_ofType__["a" /* ofType */])(__WEBPACK_IMPORTED_MODULE_13__helpers_actionTypes__["a" /* MUTATE_ASYNC */]), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["d" /* map */])(function (action) {
            var url = action.url, _a = action.transform, transform = _a === void 0 ? identity : _a, update = action.update, body = action.body, meta = action.meta, optimisticUpdate = action.optimisticUpdate, _b = action.options, options = _b === void 0 ? {} : _b;
            Object(__WEBPACK_IMPORTED_MODULE_16__helpers_invariant__["a" /* invariant */])(!!url, 'Missing required `url` field in action handler');
            var state = Object(__WEBPACK_IMPORTED_MODULE_15__helpers_getLatest__["a" /* getLatest */])(_this.store);
            var entities = _this.config && _this.config.entitiesSelector && _this.config.entitiesSelector(state)
                || Object(__WEBPACK_IMPORTED_MODULE_20__helpers_config__["c" /* defaultEntitiesSelector */])(state);
            var optimisticEntities;
            if (optimisticUpdate) {
                optimisticEntities = optimisticUpdateEntities(optimisticUpdate, entities);
            }
            var queryKey = Object(__WEBPACK_IMPORTED_MODULE_7_redux_query_dist_es_lib_query_key__["getQueryKey"])(action);
            // const start = new Date();
            var _c = options.method, method = _c === void 0 ? __WEBPACK_IMPORTED_MODULE_6_redux_query_dist_es_constants_http_methods__["POST"] : _c;
            var request = {
                body: body,
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */](options.headers),
                method: method,
                observe: (options.observe || 'response'),
                responseType: options.responseType,
                url: url,
                withCredentials: options.credentials === 'include',
            };
            // Note: only the entities that are included in `optimisticUpdate` will be passed along in the
            // `mutateStart` action as `optimisticEntities`
            _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["mutateStart"]({ url: url, body: body, request: request, optimisticEntities: optimisticEntities, queryKey: queryKey, meta: meta }));
            return __assign({}, action, { request: request, entities: entities, queryKey: queryKey });
        }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["b" /* filter */])(function (action) {
            if (!_this.config || !_this.config.mock || _this.config.mock.mode !== __WEBPACK_IMPORTED_MODULE_18__helpers_mockMode__["a" /* MockMode */].Mock) {
                // Not mocking so continue
                return true;
            }
            var url = action.url, body = action.body, meta = action.meta, queryKey = action.queryKey;
            var mockActions = _this.config.mock.getMockData(queryKey);
            if (mockActions) {
                mockActions.forEach(function (mockAction) {
                    _this.store.dispatch(mockAction);
                });
            }
            else {
                _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["requestFailure"]({
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
        }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["e" /* mergeMap */])(function (action) {
            var url = action.url, _a = action.transform, transform = _a === void 0 ? identity : _a, update = action.update, body = action.body, meta = action.meta, request = action.request, entities = action.entities, queryKey = action.queryKey;
            return _this.http.request(request.method, url, request).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["d" /* map */])(function (response) {
                if (!response.ok) {
                    throw response;
                }
                var status = (response && response.status) || 0;
                var responseBody = (response && response.body) || undefined;
                var responseText = (response && response.body) || undefined;
                var transformed = transform(responseBody, responseText, response);
                var newEntities = updateEntities(update, entities, transformed);
                return __WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["mutateSuccess"]({
                    url: url, body: body, status: status, entities: newEntities, queryKey: queryKey, responseBody: responseBody, responseText: responseText, responseHeaders: response.headers, meta: meta
                });
            }), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["a" /* catchError */])(function (errResponse) {
                if (errResponse.error instanceof Error) {
                    throw errResponse.error;
                }
                return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_4_redux_query_dist_es_actions__["mutateFailure"]({
                    url: url, body: body, status: errResponse.status, rolledBackEntities: entities, queryKey: queryKey,
                    responseBody: errResponse.error, responseText: errResponse.error, responseHeaders: errResponse.headers, meta: meta
                }));
            }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
    ], NgrxQueryEffects.prototype, "requestAsync", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
    ], NgrxQueryEffects.prototype, "mutateAsync", void 0);
    NgrxQueryEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_14__helpers_config__["a" /* NGRX_QUERY_CONFIG */])),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_17__helpers_ngrxQueryConfig__["NgrxQueryConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__helpers_ngrxQueryConfig__["NgrxQueryConfig"]) === "function" && _f || Object])
    ], NgrxQueryEffects);
    return NgrxQueryEffects;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=effects.service.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_module__ = __webpack_require__("../../../../../src/demo/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__demo_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map