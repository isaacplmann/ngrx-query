import { ConnectRequestParams, ConnectService } from '../services/connect.service';
import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
export declare class ConnectRequestDirective implements OnInit, OnDestroy {
    private connectService;
    config: any;
    response: EventEmitter<any>;
    subscription: Subscription;
    constructor(connectService: ConnectService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    subscribe(config: ConnectRequestParams): void;
    unsubscribe(): void;
    forceRequest(): void;
}
