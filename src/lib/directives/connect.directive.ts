import { ConnectRequestParams, ConnectService } from '../services/connect.service';
import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  exportAs: 'nqConnect',
  selector: 'nqConnect, [nqConnect]',
})
export class ConnectRequestDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('nqConnect')
  @Input()
  config: any = <ConnectRequestParams>undefined;
  @Output() response: EventEmitter<any> = new EventEmitter();

  subscription: Subscription;

  constructor(private connectService: ConnectService) {}

  ngOnInit(): void {
    console.log('on init');
    this.subscribe(this.config);
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    this.unsubscribe();
  }

  subscribe(config: ConnectRequestParams): void {
    // this.unsubscribe();
    this.subscription = this.connectService.requestAsync(config).subscribe(response => {
      this.response.emit(response);
    });
  }

  unsubscribe(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  forceRequest(): void {
    this.subscribe(Object.assign({}, this.config, { force: true }));
  }
}
