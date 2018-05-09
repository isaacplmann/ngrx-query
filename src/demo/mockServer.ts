import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';

export enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

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
export class MockServerService implements HttpInterceptor {
  rangers: Ranger[] = defaultRangers;
  state: SERVER_STATE = SERVER_STATE.ON;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { body, method, url } = req;
    const path = url.split('/').filter(segment => segment && segment.length > 0);
    const id = +path[path.length - 1];

    if (this.state === SERVER_STATE.BUSY) {
      return of(new HttpResponse({
        status: 429,
        body: { error: 'Too many requests'},
      }));
    } else if (this.state === SERVER_STATE.UNAUTHORIZED) {
      return of(new HttpResponse({
        status: 401,
        body: { error: 'Unauthorized'},
      }));
    } else if (this.state === SERVER_STATE.ERROR) {
      return of(new HttpResponse({
        status: 500,
        body: { error: 'Internal server error'},
      }));
    }
    switch (method) {
      case RequestMethod.Get:
        if (Number.isInteger(id)) {
          return of(new HttpResponse({
            body: this.rangers.find(ranger => ranger.id === id),
            status: 200,
          }));
        } else {
          return of(new HttpResponse({
            body: this.rangers.map(ranger => ({ id: ranger.id, name: ranger.name })),
            status: 200,
          }));
        }
      case RequestMethod.Post:
        body.id = this.rangers.length;
        this.rangers.push(body);
        return of(new HttpResponse({
          body,
          status: 200,
        }));
      case RequestMethod.Put:
        if (Number.isInteger(id)) {
          console.log(this.rangers);
          const index = this.rangers.findIndex(ranger => ranger && ranger.id === id);
          if (index >= 0) {
            this.rangers[index] = Object.assign({}, this.rangers[index], body);
            return of(new HttpResponse({
              body,
              status: 200,
            }));
          } else {
            return of(new HttpResponse({
              status: 404,
              body: 'Invalid ID',
            }));
          }
        }
        return this.handleUnknown();
      case RequestMethod.Delete:
        if (Number.isInteger(id)) {
          const index = this.rangers.findIndex(ranger => ranger.id === id);
          if (index >= 0) {
            this.rangers = this.rangers.slice(0, index).concat(this.rangers.slice(index + 1));
            return of(new HttpResponse({
              body: { message: 'Successfully deleted id ' + id },
              status: 200,
            }));
          } else {
            return of(new HttpResponse({
              status: 404,
              body: 'Invalid ID',
            }));
          }
        }
        return this.handleUnknown();
      default:
        return this.handleUnknown();
    }
  }

  handleUnknown(): Observable<HttpResponse<string>> {
    return of(new HttpResponse({
      status: 404,
      body: 'Unknown api endpoint',
    }));
  }
}
