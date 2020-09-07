import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/auth/register";
  private _loginUrl = "http://localhost:8080/auth/login";

  constructor(private http: HttpClient,
    private _router: Router) { }

  loginUser(user) {
    return this.http.post<Object>(this._loginUrl, user)
  }
}
