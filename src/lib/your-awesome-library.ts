import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
})
export class YourAwesomeLibraryModule {

  /* optional: in case you need users to override your providers or providers need to be singletons */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: YourAwesomeLibraryModule,
      providers: [],
    };
  }
}
