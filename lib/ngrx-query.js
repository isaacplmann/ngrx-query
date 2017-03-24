var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ConnectEntityService } from './services/connectEntity.service';
import { ConnectRequestDirective } from './directives/connect.directive';
import { NGRX_QUERY_CONFIG } from './helpers/config';
import { ConnectService } from './services/connect.service';
import { NgrxQueryEffects } from './services/effects.service';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
var NgrxQueryModule = NgrxQueryModule_1 = (function () {
    function NgrxQueryModule() {
    }
    /* optional: in case you need users to override your providers */
    NgrxQueryModule.forRoot = function (config) {
        return {
            ngModule: NgrxQueryModule_1,
            providers: [
                { provide: NGRX_QUERY_CONFIG, useValue: config },
                ConnectService,
                ConnectEntityService,
            ],
        };
    };
    return NgrxQueryModule;
}());
NgrxQueryModule = NgrxQueryModule_1 = __decorate([
    NgModule({
        declarations: [
            ConnectRequestDirective,
        ],
        exports: [
            ConnectRequestDirective,
        ],
        imports: [
            EffectsModule.run(NgrxQueryEffects),
        ],
    })
], NgrxQueryModule);
export { NgrxQueryModule };
var NgrxQueryModule_1;
//# sourceMappingURL=ngrx-query.js.map