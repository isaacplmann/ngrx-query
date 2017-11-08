import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { ConnectRequestDirective } from './directives/connect.directive';
import { NGRX_QUERY_CONFIG } from './helpers/config';
import { NgrxQueryConfig } from './helpers/ngrxQueryConfig';
import { ConnectService } from './services/connect.service';
import { ConnectEntityService } from './services/connectEntity.service';
import { NgrxQueryEffects } from './services/effects.service';

@NgModule({
  declarations: [
    ConnectRequestDirective,
  ],
  exports: [
    ConnectRequestDirective,
  ],
  imports: [
    EffectsModule.forFeature([NgrxQueryEffects]),
    HttpClientModule,
  ],
})
export class NgrxQueryModule {

  /* optional: in case you need users to override your providers */
  static forRoot(config?: NgrxQueryConfig): ModuleWithProviders {
    return {
      ngModule: NgrxQueryModule,
      providers: [
        { provide: NGRX_QUERY_CONFIG, useValue: config },
        ConnectService,
        ConnectEntityService,
      ],
    };
  }
}
