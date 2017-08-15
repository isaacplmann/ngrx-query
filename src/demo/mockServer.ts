import { Injectable } from '@angular/core';
import { MockConnection } from '@angular/http/testing';
import { RequestMethod, Response, ResponseOptions, ReadyState } from '@angular/http';

export enum SERVER_STATE {
  ON,
  BUSY,
  ERROR,
  UNAUTHORIZED,
}

export interface Ranger {
  id?: number;
  name?: string;
  color?: string;
}

export const defaultRangers: Ranger[] = [
  {
    id: 0,
    name: 'Jason',
    color: 'red',
  },
  {
    id: 1,
    name: 'Zack',
    color: 'black',
  },
  {
    id: 2,
    name: 'Trini',
    color: 'yellow',
  },
  {
    id: 3,
    name: 'Kimberly',
    color: 'pink',
  },
  {
    id: 4,
    name: 'Billy',
    color: 'blue',
  },
];

@Injectable()
export class MockServerService {
  rangers: Ranger[] = defaultRangers;
  state: SERVER_STATE = SERVER_STATE.ON;

  handleConnection(connection: MockConnection) {
    const method = connection.request.method;
    const url = connection.request.url;
    const body = JSON.parse(connection.request.getBody());
    console.log(`${RequestMethod[method].toUpperCase()} ${url}`, body);
    connection.response.asObservable().take(1).subscribe(response => console.log(`${response.status || 200}`, response.json()));
    const path = url.split('/').filter(segment => segment && segment.length > 0);
    const id = +path[path.length - 1];

    if (this.state === SERVER_STATE.BUSY) {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 429,
        body: { error: 'Too many requests'},
      })));
      return;
    } else if (this.state === SERVER_STATE.UNAUTHORIZED) {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 401,
        body: { error: 'Unauthorized'},
      })));
      return;
    } else if (this.state === SERVER_STATE.ERROR) {
      connection.mockRespond(new Response(new ResponseOptions({
        status: 500,
        body: { error: 'Internal server error'},
      })));
      return;
    }
    switch (method) {
      case RequestMethod.Get:
        if (Number.isInteger(id)) {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(this.rangers.find(ranger => ranger.id === id)),
            status: 200,
          })));
        } else {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(this.rangers.map(ranger => ({ id: ranger.id, name: ranger.name }))),
            status: 200,
          })));
        }
        break;
      case RequestMethod.Post:
        body.id = this.rangers.length;
        this.rangers.push(body);
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(body),
          status: 200,
        })));
        break;
      case RequestMethod.Put:
        if (Number.isInteger(id)) {
          console.log(this.rangers);
          const index = this.rangers.findIndex(ranger => ranger && ranger.id === id);
          if (index >= 0) {
            this.rangers[index] = Object.assign({}, this.rangers[index], body);
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(body),
              status: 200,
            })));
          } else {
            connection.mockRespond(new Response(new ResponseOptions({
              status: 404,
              body: 'Invalid ID',
            })));
          }
        } else {
          this.handleUnknown(connection);
        }
        break;
      case RequestMethod.Delete:
        if (Number.isInteger(id)) {
          const index = this.rangers.findIndex(ranger => ranger.id === id);
          if (index >= 0) {
            this.rangers = this.rangers.slice(0, index).concat(this.rangers.slice(index + 1));
            connection.mockRespond(new Response(new ResponseOptions({
              body: { message: 'Successfully deleted id ' + id },
              status: 200,
            })));
          } else {
            connection.mockRespond(new Response(new ResponseOptions({
              status: 404,
              body: 'Invalid ID',
            })));
          }
        } else {
          this.handleUnknown(connection);
        }
        break;
      default:
        this.handleUnknown(connection);
    }
  }

  handleUnknown(connection: MockConnection) {
    connection.mockRespond(new Response(new ResponseOptions({
      status: 404,
      body: 'Unknown api endpoint',
    })));
  }
}
