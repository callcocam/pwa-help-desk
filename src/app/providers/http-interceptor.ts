import {HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the MyHttpInterceptorProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor {

    constructor(public http: HttpClient) {
        console.log('Hello MyHttpInterceptorProvider Provider');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = req;
        const token = window.localStorage.getItem('token');
        if(token){
            authRequest = req.clone({
                setHeaders: {
                    'Content-Type':  'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }
        return next.handle(authRequest);
    }

}