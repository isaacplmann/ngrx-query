/*
 * Public API Surface of ngrx-query
 */

export { NgrxQueryModule } from './lib/ngrx-query';
export { NgrxQueryEffects } from './lib/services/effects.service';
export { default as entitiesReducer } from 'redux-query/dist/es/reducers/entities';
export { default as queriesReducer } from 'redux-query/dist/es/reducers/queries';
export { queryCount, lastUpdated, status, isPending, isFinished } from 'redux-query/dist/es/selectors/query';
export { ConnectService, ConnectRequestParams, ConnectMutateParams } from './lib/services/connect.service';
export { ConnectEntityService, arrayToObjectsById, objectsByIdToArray } from './lib/services/connectEntity.service';
export { ConnectRequestDirective } from './lib/directives/connect.directive';
export { NqConnectedComponent, provideNqConnectedComponent } from './lib/directives/connected.component';
export { NGRX_QUERY_CONFIG } from './lib/helpers/config';
export { NgrxQueryConfig } from './lib/helpers/ngrxQueryConfig';
export { RequestParams, MutateParams, requestAsync, mutateAsync } from './lib/helpers/actions';
export { MockMode } from './lib/helpers/mockMode';
