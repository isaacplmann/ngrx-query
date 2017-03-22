var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConnectService } from '../services/connect.service';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
var ConnectRequestDirective = (function () {
    function ConnectRequestDirective(connectService) {
        this.connectService = connectService;
        // tslint:disable-next-line:no-input-rename
        this.config = undefined;
        this.response = new EventEmitter();
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
    Input('nqConnect'),
    Input(),
    __metadata("design:type", Object)
], ConnectRequestDirective.prototype, "config", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ConnectRequestDirective.prototype, "response", void 0);
ConnectRequestDirective = __decorate([
    Directive({
        exportAs: 'nqConnect',
        selector: 'nqConnect, [nqConnect]',
    }),
    __metadata("design:paramtypes", [ConnectService])
], ConnectRequestDirective);
export { ConnectRequestDirective };
//# sourceMappingURL=connect.directive.js.map