import { NqConnectedComponent, provideNqConnectedComponent } from '../../lib';
import { Ranger } from '../mockServer';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  providers: [provideNqConnectedComponent(RangerDetailComponent)],
  selector: 'nq-ranger-detail',
  templateUrl: 'ranger-detail.component.html'
})
export class RangerDetailComponent implements NqConnectedComponent {
  @Input() nqData = <Ranger>undefined;
  @Output() nqRefresh: EventEmitter<any> = new EventEmitter();
}
