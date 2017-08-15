import { ChangeDetectorRef } from '@angular/core';
import { Optional } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ConnectRequestParams, ConnectService } from '../services/connect.service';
import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output, Host, Type } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NqConnectedComponent } from './connected.component';

@Directive({
  exportAs: 'nqConnect',
  selector: '[nqConnect]',
})
export class ConnectRequestDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('nqConnect')
  config: any = <ConnectRequestParams>undefined;
  @Output() response: EventEmitter<any> = new EventEmitter();

  subscription: Subscription;

  constructor(
    private connectService: ConnectService,
    public changeDetector: ChangeDetectorRef,
    @Optional() public host: NqConnectedComponent,
  ) {}

  ngOnInit(): void {
    this.subscribe(this.config);
    if (this.host) {
      this.host.nqRefresh.subscribe(() => this.forceRequest());
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  subscribe(config: ConnectRequestParams): void {
    this.unsubscribe();
    this.subscription = this.connectService.requestAsync(config).subscribe(response => {
      if (this.response) {
        if (this.host) {
          setTimeout(() => {
            this.host.nqData = response;
            if (this.host.changeDetector) {
              this.host.changeDetector.markForCheck();
            }
          });
        }
        this.response.emit(response);
      }
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
