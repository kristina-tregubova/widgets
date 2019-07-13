import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from './config';

// @Injectable()
// export class InterceptorService implements HttpInterceptor {

//   constructor(
//     @Inject(BASE_URL_TOKEN) private baseUrl: string
//   ) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const jsonReq: HttpRequest<any> = req.clone({
//       url: `${this.baseUrl}`
//     });

//     return next.handle(jsonReq);
//   }
// }
