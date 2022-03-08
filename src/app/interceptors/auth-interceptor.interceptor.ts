import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthIntercepterInterceptor implements HttpInterceptor {

  constructor() {}

 
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let currentPerson = JSON.parse(localStorage.getItem('currentPerson') || "{}");

    if (currentPerson && currentPerson.token) {
      request = request.clone({
          setHeaders: { 
              "x-access-token": `${currentPerson.token}`
          }
      });
  }
    
    return next.handle(request);
  }
}
