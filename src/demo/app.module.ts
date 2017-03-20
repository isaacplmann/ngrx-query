import { DashboardComponent } from './dashboard/dashboard.component';
import { entitiesReducer, NgrxQueryModule, queriesReducer } from './../../ngrx-query';
import { AppComponent } from './app.component';
import { ApplicationRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export function httpFactory(backend, options): Http {
  return new Http(backend, options);
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StoreModule.provideStore({
      entities: entitiesReducer,
      queries: queriesReducer,
    }),
    NgrxQueryModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [
     BaseRequestOptions,
     MockBackend,
     {
       deps: [MockBackend, BaseRequestOptions],
       provide: Http,
       useFactory: httpFactory,
     },
  ],
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public mockBackend: MockBackend) {
    mockBackend.connections.subscribe(connection => {
      console.log(connection);
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify({ test: 'value' }),
      })));
    });
  }
  // hmrOnInit(store: any): void {
  //   console.log('HMR store', store);
  // }
  // hmrOnDestroy(store: any): void {
  //   let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
  //   // recreate elements
  //   store.disposeOldHosts = createNewHosts(cmpLocation);
  //   // remove styles
  //   removeNgStyles();
  // }
  // hmrAfterDestroy(store: any): void {
  //   // display new elements
  //   store.disposeOldHosts();
  //   delete store.disposeOldHosts;
  // }
}
