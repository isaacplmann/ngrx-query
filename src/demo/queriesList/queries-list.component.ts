import { queriesSelector } from '../app.module';
import { ConnectService } from '../../lib/services/connect.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
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
