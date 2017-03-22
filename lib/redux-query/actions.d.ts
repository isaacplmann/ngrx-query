import { MutateParams } from './../helpers/actions';
import { RequestParams } from '../';
export declare const requestStart: (url: any, body: any, request: any, meta: any, queryKey: any) => {
    type: string;
    url: any;
    body: any;
    request: any;
    meta: any;
    queryKey: any;
};
export declare const requestSuccess: (url: any, body: any, status: any, entities: any, meta: any, queryKey: any) => {
    type: string;
    url: any;
    body: any;
    status: any;
    entities: any;
    meta: any;
    queryKey: any;
    time: number;
};
export declare const requestFailure: (url: any, body: any, status: any, responseBody: any, meta: any, queryKey: any) => {
    type: string;
    url: any;
    body: any;
    status: any;
    responseBody: any;
    meta: any;
    queryKey: any;
    time: number;
};
export declare const mutateStart: (url: any, body: any, request: any, optimisticEntities: any, queryKey: any) => {
    type: string;
    url: any;
    body: any;
    request: any;
    optimisticEntities: any;
    queryKey: any;
};
export declare const mutateSuccess: (url: any, body: any, status: any, entities: any, queryKey: any) => {
    type: string;
    url: any;
    body: any;
    status: any;
    entities: any;
    queryKey: any;
    time: number;
};
export declare const mutateFailure: (url: any, body: any, status: any, originalEntities: any, queryKey: any) => {
    type: string;
    url: any;
    body: any;
    status: any;
    originalEntities: any;
    queryKey: any;
    time: number;
};
export declare const requestAsync: (params: RequestParams) => any;
export declare const mutateAsync: (params: MutateParams) => any;
export declare const cancelQuery: (queryKey: any) => {
    type: string;
    queryKey: any;
};
export declare const removeEntity: (path: any) => {
    type: string;
    path: any;
};
export declare const removeEntities: (paths: any) => {
    type: string;
    paths: any;
};
