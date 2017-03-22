import { ConnectRequestParams } from '../lib';
import { Component } from '@angular/core';

@Component({
  selector: 'nq-demo',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  dashboardId: number = 2;
  isShown: boolean = false;
  data: any;

  config: ConnectRequestParams = {
    selector: s => s.queries,
    transform: response => ({
      chartsById: { test: response.test },
      dashboardsById: { test: response.test },
    }),
    update: {
      chartsById: (prevCharts, dashboardCharts) => ({
        ...prevCharts,
        ...dashboardCharts,
      }),
      dashboardsById: (prevDashboards, dashboards) => ({
        ...prevDashboards,
        ...dashboards,
      }),
    },
    url: `/api/dashboard/${this.dashboardId}`,
  };

  onDataReceived(data: any): void {
    this.data = data;
    console.log(data);
  }

  log(message: any): void {
    console.log(message);
  }
}
