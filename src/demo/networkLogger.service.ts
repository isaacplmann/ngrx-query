import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class NetworkLoggerService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`${req.method.toUpperCase()} ${req.url} ${req.body}`);
    return next.handle(req).pipe(
      filter(event => event.type === HttpEventType.Response),
      tap((response: HttpResponse<any>) => console.log(response.status || 200, response.body)),
    );
  }
}
