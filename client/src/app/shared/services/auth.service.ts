import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthService {
  private token = null

  constructor(private http: HttpClient) {}

  public register() {

  }

  public login(user: IUser): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user)
      .pipe(
        tap(({token}) => {
          localStorage.setItem('token', token)
          this.setToken(token)
        })
      )
  }

  public logout(): void {
    this.setToken(null)
    localStorage.clear()
  }

  private setToken(token: string): void {
    this.token = token
  }

  private getToken(): string {
    return this.token
  }

  private isAuthenticated(): boolean {
    return !!this.token
  }
}
