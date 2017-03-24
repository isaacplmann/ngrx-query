import { createGetRangerListQuery, rangerListSelector } from './ranger/queries';
import { ConnectService } from './../lib/services/connect.service';
import { MockServerService, Ranger, SERVER_STATE } from './mockServer';
import { arrayToObjectsById, objectsByIdToArray } from '../lib/services/connectEntity.service';
import { ConnectRequestParams } from '../lib';
import { Component } from '@angular/core';

@Component({
  selector: 'nq-demo',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  config: ConnectRequestParams = Object.assign({}, createGetRangerListQuery(), { selector: rangerListSelector });
  serverState = SERVER_STATE;

  constructor(private connectService: ConnectService, private mockServer: MockServerService) {}

  log(message: any): void {
    console.log(message);
  }
}
