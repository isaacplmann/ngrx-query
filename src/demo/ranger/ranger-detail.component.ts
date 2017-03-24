import { Ranger } from '../mockServer';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nq-ranger-detail',
  templateUrl: 'ranger-detail.component.html'
})
export class RangerDetailComponent {
  @Input() ranger = <Ranger>undefined;
  @Output() refresh: EventEmitter<any> = new EventEmitter();
}
