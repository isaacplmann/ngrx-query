import { ChangeDetectorRef } from '@angular/core';
import { ConnectRequestDirective, NqConnectedComponent } from 'ngrx-query';
import { ConnectService } from 'ngrx-query';
import { Directive, Optional } from '@angular/core';
import { createGetRangerListQuery, rangerListSelector } from './queries';

@Directive({ selector: '[rangerListData]' })
export class RangerListDataDirective extends ConnectRequestDirective {
  constructor(private connect: ConnectService, public changeDetector: ChangeDetectorRef, @Optional() public host: NqConnectedComponent) {
    super(connect, changeDetector, host);
    this.config = Object.assign({}, createGetRangerListQuery(), { selector: rangerListSelector });
  }
}
