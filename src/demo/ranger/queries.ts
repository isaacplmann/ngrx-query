import { RequestParams } from '../../lib';
import { arrayToObjectsById, objectsByIdToArray } from '../../lib/services/connectEntity.service';
import { Ranger } from '../mockServer';
import { MutateParams } from './../../lib/helpers/actions';

export function createGetRangerQuery(id): RequestParams {
  return {
      transform: response => ({ rangersById: { [id]: response } }),
      update: {
        rangersById: (prevEntities, entities) => ({
          ...prevEntities,
          ...entities,
        }),
      },
      url: `/api/rangers/${id}`,
  };
};

export function createGetRangerListQuery(): RequestParams {
  return {
    transform: response => ({
      rangersById: arrayToObjectsById(response, ranger => ranger.id),
    }),
    update: {
      rangersById: (prevRangers, rangers) => ({
        ...prevRangers,
        ...rangers,
      }),
    },
    url: `/api/rangers`,
  };
}

export function createCreateRangerQuery(ranger): MutateParams {
  return {
    body: ranger,
    optimisticUpdate: {
      rangersById: (prevEntities) => ({
        ...prevEntities,
        [ranger.id]: ranger,
      }),
    },
    transform: response => ({ rangersById: { [response.id]: response } }),
    update: {
      rangersById: (prevEntities, entities) => ({
        ...prevEntities,
        ...entities,
      }),
    },
    url: `/api/rangers`,
  };
}
export function createUpdateRangerQuery(ranger): MutateParams {
  return {
    body: ranger,
    optimisticUpdate: {
      rangersById: (prevEntities) => ({
        ...prevEntities,
        [ranger.id]: ranger,
      }),
    },
    options: {
      method: 'PUT',
    },
    transform: response => ({ rangersById: { [response.id]: response } }),
    update: {
      rangersById: (prevEntities, entities) => ({
        ...prevEntities,
        ...entities,
      }),
    },
    url: `/api/rangers/${ranger.id}`,
  };
}
export function createDeleteRangerQuery(id): MutateParams {
  return {
    optimisticUpdate: {
      rangersById: prevEntities => {
        const { [id]: deleted, ...rest} = prevEntities;
        return rest;
      },
    },
    options: {
      method: 'DELETE',
    },
    update: {
      rangersById: prevEntities => {
        const { [id]: deleted, ...rest} = prevEntities;
        return rest;
      },
    },
    url: `/api/rangers/${id}`,
  };
}

export function rangerByIdSelector(rangerId): (any) => Ranger {
  return state => {
    if (rangerListSelector(state)) {
        return rangerListSelector(state)[rangerId];
    } else {
        return undefined;
    }
  };
}
export function rangerListSelector(s): Ranger[] {
  return objectsByIdToArray(s.entities1.rangersById);
}
