import { ConnectRequestDirective } from './src/lib/directives/connect.directive';
import { defaultConfig, NGRX_QUERY_CONFIG, NgrxQueryConfig } from './src/lib/helpers/config';
import { ConnectService } from './src/lib/services/connect.service';
import { NgrxQueryEffects } from './src/lib/services/effects.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import './src/polyfills';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/zip';

// for manual imports
export { NgrxQueryEffects } from './src/lib/services/effects.service';
export { default as entitiesReducer } from './src/lib/redux-query/reducers/entities';
export { default as queriesReducer } from './src/lib/redux-query/reducers/queries';
export * from './src/lib/redux-query/selectors';
export { ConnectService, ConnectRequestParams, ConnectMutateParams } from './src/lib/services/connect.service';
export { ConnectRequestDirective } from './src/lib/directives/connect.directive';
export { NGRX_QUERY_CONFIG, NgrxQueryConfig } from './src/lib/helpers/config';
export { RequestParams, MutateParams, requestAsync, mutateAsync } from './src/lib/helpers/actions';

@NgModule({
  declarations: [
    ConnectRequestDirective,
  ],
  exports: [
    ConnectRequestDirective,
  ],
  imports: [
    EffectsModule.run(NgrxQueryEffects),
  ],
  providers: [
    { provide: NGRX_QUERY_CONFIG, useValue: defaultConfig},
    NgrxQueryEffects,
    ConnectService,
  ],
})
export class NgrxQueryModule {

  /* optional: in case you need users to override your providers */
  static forRoot(config: NgrxQueryConfig): ModuleWithProviders {
    return {
      ngModule: NgrxQueryModule,
      providers: [{ provide: NGRX_QUERY_CONFIG, useValue: config }],
    };
  }
}
