import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BusService } from 'app/bus.service';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';

@Injectable()
export class SecurityService {
  private userTokenKey = 'userToken';
  private userKey = 'user';
  private url = 'credentials';

  constructor(private bus: BusService, private http: Http, private router: Router) {
    this.onSecurityErrNavigateToLogin();
    this.emitUserStatus();
  }

  logInUser(credentials: IUserCredential) {
    this.http
      .post(this.url, credentials)
      .subscribe(r => {
        this.saveUserToken(r);
        this.getLoggedUser();
      });
  }

  logOutUser() {
    localStorage.removeItem(this.userTokenKey);
    this.bus.emitUserToken(null);
    localStorage.removeItem(this.userKey);
    this.bus.emitUser(null);
    this.bus.emit('logged out!!');
    this.navigateTo(['/']);
  }

  private onSecurityErrNavigateToLogin() {
    this.bus
      .getSecurityErr$()
      .subscribe(err => this.navigateTo(['/login']));
  }

  private emitUserStatus() {
    const userToken: string = localStorage.getItem(this.userTokenKey);
    this.bus.emitUserToken(userToken);
    const userStorage = localStorage.getItem(this.userKey);
    const user = userStorage ? JSON.parse(userStorage) : null;
    this.bus.emitUser(user);
  }

  private saveUserToken(response) {
    const userToken: string = response.json().access_token;
    localStorage.setItem(this.userTokenKey, userToken);
    this.bus.emitUserToken(userToken);
  }

  private getLoggedUser() {
    this.http
      .get('users/me')
      .subscribe(res => this.saveUser(res));
  }

  private saveUser(res) {
    const user = res.json();
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.bus.emitUser(user);
    this.bus.emit(user.name + ' logged in!!');
    this.navigateTo(['/']);
  }

  private navigateTo(target: any, args?: any) {
    this.router.navigate(target);
  }
}

export interface IUserCredential {
  email: string;
  password: string;
}
