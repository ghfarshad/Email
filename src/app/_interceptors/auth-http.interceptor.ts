import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifyRequest = request.clone({ withCredentials: true });
    return next.handle(modifyRequest).pipe(tap((value)=>{
      if(value.type===HttpEventType.Sent){
        console.log('sent')
      }
      if(value.type===HttpEventType.Response){
        console.log('Response')
        console.log("value of auth intercepter :" ,value)
      }
    }))

  }

}
      
  

