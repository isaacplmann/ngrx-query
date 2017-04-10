import { NqConnectedComponent, provideNqConnectedComponent } from '../../lib';
import { Ranger } from '../mockServer';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNqConnectedComponent(RangerDetailComponent)],
  selector: 'nq-ranger-detail',
  templateUrl: 'ranger-detail.component.html'
})
export class RangerDetailComponent implements NqConnectedComponent {
  @Input() nqData = <Ranger>undefined;
  @Output() nqRefresh: EventEmitter<any> = new EventEmitter();

  constructor(public changeDetector: ChangeDetectorRef) {}
}
