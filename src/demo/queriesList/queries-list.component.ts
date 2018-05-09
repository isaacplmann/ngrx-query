import { queriesSelector } from '../selectors';
import { ConnectService } from 'ngrx-query';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nq-queries-list',
  templateUrl: 'queries-list.component.html'
})
export class QueriesListComponent {
  queriesList$: Observable<any>

  constructor(private connectService: ConnectService) {
    this.queriesList$ = connectService.select(queriesSelector);
  }

  getKeys(object: any): string[] {
    return Object.keys(object);
  }
}
