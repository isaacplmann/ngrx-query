import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { entitiesReducer, NgrxQueryModule, queriesReducer } from 'ngrx-query';
import { AppComponent } from './app.component';
import { MockServerService } from './mockServer';
import { NetworkLoggerService } from './networkLogger.service';
import { QueriesListComponent } from './queriesList/queries-list.component';
import { RangerDetailComponent } from './ranger/ranger-detail.component';
import { RangerListComponent } from './ranger/ranger-list.component';
import { RangerListDataDirective } from './ranger/ranger-list.data.directive';
import { entitiesSelector, queriesSelector } from './selectors';

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
    QueriesListComponent,
    RangerListComponent,
    RangerDetailComponent,
    RangerListDataDirective,
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
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
    MockServerService,
    NetworkLoggerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkLoggerService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: MockServerService,
      multi: true,
    },
  ],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
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
