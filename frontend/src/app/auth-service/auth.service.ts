import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  email: String;
  password: String;

  constructor(private http: HttpClient) {

  }

  authenticationService(email: String, password: String) {
    return this.http.get("http://localhost:8080/api/user/auth",
      { headers: { Authorization: this.createBasicAuthToken(email, password) }})
      .pipe(map(() => {
        this.email = email;
        this.password = password;
        this.registerSuccessfulLogin(email);
    }));
  }

  createBasicAuthToken(email: String, password: String) {
    return 'Basic ' + btoa(email + ':' + password);
  }

  registerSuccessfulLogin(email) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    return user !== null;
  }

  getLoggedInEmail() {
    let email = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (email === null) return '';
    return email;
  }
}
