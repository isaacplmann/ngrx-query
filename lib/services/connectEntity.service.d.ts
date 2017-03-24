import { ConnectService } from './connect.service';
import { Observable } from 'rxjs/Observable';
export declare function objectsByIdToArray(obj: object): any[];
export declare function arrayToObjectsById(array: any[], keyOf: (any) => string): any;
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
export declare class ConnectEntityService<E> {
    private connectService;
    config: EntityConfig<E>;
    entity: E;
    constructor(connectService: ConnectService);
    init(config: EntityConfig<E>): void;
    list(): Observable<E[]>;
    get(id: number | string): Observable<E>;
    create(entity: E): Observable<E>;
    edit(entity: E): Observable<E>;
    delete(id: number | string): Observable<E>;
}
