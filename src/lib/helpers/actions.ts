import * as ngrxQueryActionTypes from './actionTypes';
import { requestAsync as rqRequestAsync, mutateAsync as rqMutateAsync } from 'redux-query/dist/es/actions';

export type TransformFunction = (body: any, text?: string, response?: Response) => { [id: string]: any};
export type UpdateFunction = (prevValue: any, value: any) => any;
export interface UpdateFunctionMap {
  [id: string]: UpdateFunction;
}
export interface HttpOptions {
  method?: 'DELETE' | 'GET' | 'HEAD' | 'POST' | 'PUT';
  headers?: { [key: string]: any };
  credentials?: 'include';
}

export interface BaseParams {
    body?: Object;
    meta?: Object;
    url: string;
    queryKey?: string;
}
export interface RequestParams extends BaseParams {
    force?: boolean;
    options?: HttpOptions;
    retry?: boolean;
    transform?: TransformFunction;
    update: UpdateFunctionMap;
};

export interface MutateParams extends BaseParams {
    options?: HttpOptions;
    optimisticUpdate?: UpdateFunctionMap;
    transform?: TransformFunction;
    update: UpdateFunctionMap;
};

export const requestAsync
  = (params: RequestParams) => Object.assign({}, rqRequestAsync(params), { type: ngrxQueryActionTypes.REQUEST_ASYNC });
export const mutateAsync
  = (params: MutateParams) => Object.assign({}, rqMutateAsync(params), { type: ngrxQueryActionTypes.MUTATE_ASYNC });
