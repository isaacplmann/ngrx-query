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
import { mutateAsync, requestAsync } from '../helpers/actions';
import { defaultEntitiesSelector, NGRX_QUERY_CONFIG } from '../helpers/config';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
var ConnectService = (function () {
    function ConnectService(store, config) {
        this.store = store;
        this.config = config;
    }
    ConnectService.prototype.mutateAsync = function (config) {
        this.store.dispatch(mutateAsync(config));
        return this.select(config.selector);
    };
    ConnectService.prototype.requestAsync = function (config) {
        this.store.dispatch(requestAsync(config));
        return this.select(config.selector);
    };
    ConnectService.prototype.select = function (selector) {
        return this.store.select(selector || this.config.entitiesSelector || defaultEntitiesSelector);
    };
    return ConnectService;
}());
ConnectService = __decorate([
    Injectable(),
    __param(1, Inject(NGRX_QUERY_CONFIG)),
    __metadata("design:paramtypes", [Store, Object])
], ConnectService);
export { ConnectService };
//# sourceMappingURL=connect.service.js.map