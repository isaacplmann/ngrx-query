import { Action } from '@ngrx/store';
import { MUTATE_ASYNC, REQUEST_ASYNC } from './actionTypes';
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
export interface RequestAsyncAction extends RequestParams, Action {
  type: typeof REQUEST_ASYNC;
}

export interface MutateParams extends BaseParams {
    options?: HttpOptions;
    optimisticUpdate?: UpdateFunctionMap;
    transform?: TransformFunction;
    update: UpdateFunctionMap;
};
export interface MutateAsyncAction extends MutateParams, Action {
  type: typeof MUTATE_ASYNC;
}

export const requestAsync
  = (params: RequestParams): RequestAsyncAction => Object.assign({}, rqRequestAsync(params), { type: REQUEST_ASYNC });
export const mutateAsync
  = (params: MutateParams): MutateAsyncAction => Object.assign({}, rqMutateAsync(params), { type: MUTATE_ASYNC });
