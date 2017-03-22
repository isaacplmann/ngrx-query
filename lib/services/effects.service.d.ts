import { NgrxQueryConfig } from '../helpers/ngrxQueryConfig';
import { Http } from '@angular/http';
import { Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
export declare function identity(x: any, y?: any): any;
export declare function optimisticUpdateEntities(optimisticUpdate: any, entities: any): {};
export declare function updateEntities(update: any, entities: any, transformed: any): {};
export declare function getPendingQueries(queries: any[]): any[];
export declare class NgrxQueryEffects {
    private actions$;
    private store;
    private http;
    private config;
    requestAsync: Observable<Action>;
    mutateAsync: Observable<any>;
    constructor(actions$: Actions, store: Store<any>, http: Http, config: NgrxQueryConfig);
}
