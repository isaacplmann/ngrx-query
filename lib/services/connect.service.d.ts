import { NgrxQueryConfig, Selector } from '../helpers/ngrxQueryConfig';
import { MutateParams, RequestParams } from '../helpers/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
export interface ConnectRequestParams extends RequestParams {
    selector?: Selector;
}
export interface ConnectMutateParams extends MutateParams {
    selector?: Selector;
}
export declare class ConnectService {
    private store;
    private config;
    constructor(store: Store<any>, config: NgrxQueryConfig);
    mutateAsync(config: ConnectMutateParams): Observable<any>;
    requestAsync(config: ConnectRequestParams): Observable<any>;
    select(selector: Selector): Observable<any>;
}
