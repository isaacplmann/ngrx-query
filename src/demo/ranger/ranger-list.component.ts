import { Ranger } from '../mockServer';
import { Observable } from 'rxjs/Observable';
import {
  createCreateRangerQuery,
  createDeleteRangerQuery,
  createGetRangerQuery,
  createUpdateRangerQuery,
  rangerByIdSelector
} from './queries';
import { ConnectService, ConnectRequestParams, NqConnectedComponent, provideNqConnectedComponent } from '../../lib';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  providers: [provideNqConnectedComponent(RangerListComponent)],
  selector: 'nq-ranger-list',
  templateUrl: 'ranger-list.component.html'
})
export class RangerListComponent implements NqConnectedComponent {
  @Input() nqData: Ranger[];
  @Output() nqRefresh: EventEmitter<any> = new EventEmitter();

  showRangers: { [id: number]: boolean} = {};
  newRanger: Ranger = {};

  constructor(private connectService: ConnectService) {}

  getDetailsQuery(id: number): ConnectRequestParams {
    return Object.assign({}, createGetRangerQuery(id), { selector: rangerByIdSelector(id) });
  }

  edit(ranger: Ranger) {
    const updatedRanger = Object.assign({}, ranger, { name: ranger.name + ' Edited' });
    const mutateQuery = Object.assign({}, createUpdateRangerQuery(updatedRanger), { selector: rangerByIdSelector(ranger.id) });
    this.connectService.mutateAsync(mutateQuery);
  }

  create(ranger: Ranger) {
    const mutateQuery = Object.assign({}, createCreateRangerQuery(ranger));
    this.connectService.mutateAsync(mutateQuery);
    this.newRanger = {};
  }

  delete(id: number) {
    const mutateQuery = Object.assign({}, createDeleteRangerQuery(id));
    this.connectService.mutateAsync(mutateQuery);
  }
}
