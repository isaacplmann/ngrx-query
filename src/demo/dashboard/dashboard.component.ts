import { Observable } from 'rxjs/Observable';
import { createUpdateDashboardQuery, dashboardByIdSelector } from './queries';
import { ConnectService } from './../../../ngrx-query';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  @Input() dashboardId = 2;
  dashboard$: Observable<any>;

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
    const newName = 'steve';

    this.dashboard$ = this.connectService.mutateAsync({
      ...createUpdateDashboardQuery(this.dashboardId, newName),
      selector: dashboardByIdSelector(this.dashboardId),
    });
  }
}
