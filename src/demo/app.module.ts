import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { MockMode } from '../lib/helpers/ngrxQueryConfig';
import { RangerListDataDirective } from './ranger/ranger-list.data.directive';
import { RangerDetailComponent } from './ranger/ranger-detail.component';
import { RangerListComponent } from './ranger/ranger-list.component';
import { entitiesReducer, NgrxQueryModule, queriesReducer } from '../lib';
import { AppComponent } from './app.component';
import { ApplicationRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MockServerService } from './mockServer';

export function httpFactory(backend, options): Http {
  return new Http(backend, options);
}
export function entitiesSelector(state): any {
  return state.entities1;
}
export function queriesSelector(state): any {
  return state.queries1;
}
export function saveMockData(queryKey, actions): void {
  return window.localStorage.setItem('mockApi-' + queryKey, JSON.stringify(actions));
}
export function getMockData(queryKey): any[] {
  return JSON.parse(window.localStorage.getItem('mockApi-' + queryKey));
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    RangerListComponent,
    RangerDetailComponent,
    RangerListDataDirective,
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    HttpModule,
    FormsModule,
    StoreModule.forRoot({
      entities1: entitiesReducer,
      queries1: queriesReducer,
    }),
    NgrxQueryModule.forRoot({
      entitiesSelector,
      queriesSelector,
      mock: {
        mode: environment.mockMode,
        saveMockData,
        getMockData,
      },
    }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
     BaseRequestOptions,
     MockBackend,
     {
       deps: [MockBackend, BaseRequestOptions],
       provide: Http,
       useFactory: httpFactory,
     },
     MockServerService,
  ],
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public mockBackend: MockBackend, public mockServer: MockServerService) {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      this.mockServer.handleConnection(connection);
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
