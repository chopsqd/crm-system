import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {
  private token = null

  constructor(private http: HttpClient) {}

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(environment.API_LINK + 'api/auth/register', user)
  }

  login(user: IUser): Observable<{token: string}> {
    return this.http.post<{token: string}>(environment.API_LINK + 'api/auth/login', user)
      .pipe(
        tap(({token}) => {
          localStorage.setItem('token', token)
          this.setToken(token)
        })
      )
  }

  logout(): void {
    this.setToken(null)
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  getToken(): string {
    return this.token
  }

  setToken(token: string): void {
    this.token = token
  }
}
