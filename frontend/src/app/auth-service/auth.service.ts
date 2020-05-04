import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {

  USER_EMAIL = 'email';
  USER_PASSWORD = 'password';

  constructor(private http: HttpClient) {
  }

  authenticationService(email: string, password: string) {
    return this.http.get("http://localhost:8080/api/user/auth",
      { headers: { Authorization: 'Basic ' + btoa(email + ':' + password) }})
      .pipe(map(() => {
        this.setItems(email, password);
    }));
  }

  setItems(email: string, password: string) {
    sessionStorage.setItem(this.USER_EMAIL, email);
    sessionStorage.setItem(this.USER_PASSWORD, password);
  }

  isLoggedIn(): boolean {
    let email = sessionStorage.getItem(this.USER_EMAIL);
    let password = sessionStorage.getItem(this.USER_PASSWORD);
    return email !== null && password !== null;
  }

  getBasicAuthToken(): string {
    let email = this.getEmailLogged();
    let password = this.getPasswordLogged();
    return 'Basic ' + btoa(email + ':' + password);
  }

  getEmailLogged(): string {
    return sessionStorage.getItem(this.USER_EMAIL);
  }

  getPasswordLogged(): string {
    return sessionStorage.getItem(this.USER_PASSWORD);
  }

  setPasswordLogged(password: string) {
    return sessionStorage.setItem(this.USER_PASSWORD, password);
  }

  logout() {
    sessionStorage.removeItem(this.USER_EMAIL);
    sessionStorage.removeItem(this.USER_PASSWORD);
  }
}
