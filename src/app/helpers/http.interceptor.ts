import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.dev';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
    username = '123';
    password = '1232ck1232';
    usernameSubscription: Subscription;
    base64EncodedString: string;
    constructor(private userService: UserService) {
        this.usernameSubscription =
      this.userService.usernameChange$.subscribe(username => this.username = username);
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.base64EncodedString = btoa(this.username + ':' + this.password);
        const headers = new HttpHeaders({'Authorization': 'Basic ' + this.base64EncodedString});
        const url = environment.baseUrl;
        // req.headers.append('Authorization', 'Basic ' + this.base64EncodedString);
        req = req.clone({
            headers: headers,
            url: url + req.url,
            responseType: 'json',
            method: req.method
        });
        return next.handle(req);
    }
}
