import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  public USER_API = 'user';
  private _usernameSource = new BehaviorSubject<string>('');

  usernameChange$ = this._usernameSource.asObservable();

  changeUsername(username: string) {
    this._usernameSource.next(username);
  }

  getAll(): Observable<any> {
      return this.http.get(this.USER_API + '/all');
  }
  
  get(id: string) {
      return this.http.get(this.USER_API + '/' + id);
  }
  
  remove(href: string) {
      return this.http.delete(href);
  }
  
  save(user: any): Observable<any> {
      let result: Observable<Object>;
      if (user['href']) {
          result = this.http.put(user.href, user);
      } else {
         result = this.http.post(this.USER_API, user);
      }
      return result;
  }
}
