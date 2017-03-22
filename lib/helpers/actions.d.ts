export declare type TransformFunction = (response: any) => {
    [id: string]: any;
};
export declare type UpdateFunction = (prevValue: any, value: any) => any;
export interface UpdateFunctionMap {
    [id: string]: UpdateFunction;
}
export interface HttpOptions {
    method?: 'DELETE' | 'GET' | 'HEAD' | 'POST' | 'PUT';
    headers?: {
        [key: string]: any;
    };
    credentials?: 'include';
}
export interface BaseParams {
    body?: Object;
    url: string;
    queryKey?: string;
}
export interface RequestParams extends BaseParams {
    force?: boolean;
    meta?: Object;
    options?: HttpOptions;
    retry?: boolean;
    transform?: TransformFunction;
    update: UpdateFunctionMap;
}
export interface MutateParams extends BaseParams {
    options?: HttpOptions;
    optimisticUpdate?: UpdateFunctionMap;
    transform?: TransformFunction;
    update: UpdateFunctionMap;
}
export declare const requestAsync: (params: RequestParams) => any;
export declare const mutateAsync: (params: MutateParams) => any;
