import { withoutPath } from './../redux-query/reducers/entities';
import { ConnectService } from './connect.service';
import { NgrxQueryConfig, Selector } from '../helpers/ngrxQueryConfig';
import { mutateAsync, MutateParams, requestAsync, RequestParams } from '../helpers/actions';
import { defaultEntitiesSelector, NGRX_QUERY_CONFIG } from '../helpers/config';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export function objectsByIdToArray(obj: any): any[] {
  throw new Error('unimplemented');
  // return [];
};
export function arrayToObjectsById(array: any[], keyValue: (any) => string) {
  throw new Error('unimplemented');
  // return {};
}

export interface EntityConfig<E> {
  idSelector: (item: E) => any;
  entityTypeName: string;
  endpoints: CrudEndpoints;
}

export interface CrudEndpoints {
  create: string;
  remove: (id: number | string) => string;
  getById: (id: number | string) => string;
  list: string;
  update: string;
}

@Injectable()
export class ConnectEntityService<E> {
  config: EntityConfig<E>;
  entity: E;

  constructor(private connectService: ConnectService) { }

  init(config: EntityConfig<E>) {
    this.config = config;
  }

  list(): Observable<E[]> {
    return this.connectService.requestAsync({
      selector: s => objectsByIdToArray(s.entities[this.config.entityTypeName]),
      transform: (response: E[]) => ({ [this.config.entityTypeName]: arrayToObjectsById(response, this.config.idSelector) }),
      update: {
        [this.config.entityTypeName]: (prevEntities, entities) => ({
          ...prevEntities,
          ...entities,
        }),
      },
      url: this.config.endpoints.list,
    });
  }
  get(id: number): Observable<E> {
    return this.connectService.requestAsync({
      selector: s => s.entities[this.config.entityTypeName][id],
      transform: (response: E) => ({ [this.config.entityTypeName]: { [id]: response } }),
      update: {
        [this.config.entityTypeName]: (prevEntities, entities) => ({
          ...prevEntities,
          ...entities,
        }),
      },
      url: this.config.endpoints.getById(id),
    });
  }
  create(entity: E): Observable<E> {
    return this.connectService.mutateAsync({
      body: entity,
      optimisticUpdate: {
        [this.config.entityTypeName]: (prevEntities) => ({
          ...prevEntities,
          [this.config.idSelector(entity)]: entity,
        }),
      },
      transform: (response: E) => ({ [this.config.entityTypeName]: { [this.config.idSelector(response)]: response } }),
      update: {
        [this.config.entityTypeName]: (prevEntities, entities) => ({
          ...prevEntities,
          ...entities,
        }),
      },
      url: this.config.endpoints.create,
    });
  }
  edit(entity: E): Observable<E> {
    return this.connectService.mutateAsync({
      body: entity,
      optimisticUpdate: {
        [this.config.entityTypeName]: (prevEntities) => ({
          ...prevEntities,
          [this.config.idSelector(entity)]: entity,
        }),
      },
      selector: s => s.entities[this.config.entityTypeName][this.config.idSelector(entity)],
      transform: (response: E) => ({ [this.config.entityTypeName]: { [this.config.idSelector(response)]: response } }),
      update: {
        [this.config.entityTypeName]: (prevEntities, entities) => ({
          ...prevEntities,
          ...entities,
        }),
      },
      url: this.config.endpoints.create,
    });
  }
  delete(id: number): Observable<E> {
    return this.connectService.mutateAsync({
      selector: s => s.entities[this.config.entityTypeName][id],
      optimisticUpdate: {
        [this.config.entityTypeName]: prevEntities => withoutPath(prevEntities, [id]),
      },
      update: {
        [this.config.entityTypeName]: prevEntities => withoutPath(prevEntities, [id]),
      },
      url: this.config.endpoints.remove(id + ''),
    });
  }
}
