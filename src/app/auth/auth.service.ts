import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../global/service/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../global/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.ApiUrl}/login`;
  private registerUrl = `${environment.ApiUrl}/sign-up`;
  private _identity: { token: string | null, user: User | null } | null = { token: '', user: null };
  private isLogged: Subject<{ token: string | null, user: User | null }> = new Subject<{ token: string | null, user: User | null }>();

  public constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    this._identity.token = this.localStorageService.getItem('token');
    this._identity.user = JSON.parse(this.localStorageService.getItem('user'));
  }

  public signUpUser(registerData: { name: string, lastName: string, email: string, password: string }):
    Observable<{ message: string, data: User }> {
    return this.httpClient.post<{ message: string, data: User }>(this.registerUrl, registerData);
  }

  public signInUser(loginData: { email: string, password: string }): Observable<{ token: string, user: User }> {
    return this.httpClient.post<{ token: string, user: User }>(this.loginUrl, loginData);
  }

  public logout(): void {
    this._identity = null;
  }

  public get identity(): { token: string, user: User } | null {
    return this._identity;
  }
  public set identity(_identity: { token: string | null, user: User | null } | null) {
    this._identity = _identity;
  }

  public isAuthenticated(): Subject<{ token: string | null, user: User | null } | null> {
    return this.isLogged;
  }

  public observableAuthenticated(): boolean {
    return (this._identity.token != null);
  }

}
