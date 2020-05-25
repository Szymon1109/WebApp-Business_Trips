import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AuthService as SocialAuthService} from "ng4-social-login";

@Injectable()
export class AuthService {

  USER_EMAIL = 'email';
  USER_PASSWORD = 'password';
  SOCIAL_LOGIN = 'socialLogin';

  private socialEmail = "admin";
  private socialPassword = "admin";

  constructor(private http: HttpClient,
              private socialAuthService: SocialAuthService) {
  }

  authenticationService(email: string, password: string) {
    return this.http.get("http://localhost:8080/api/user/auth",
      { headers: { Authorization: 'Basic ' + btoa(email + ':' + password) }})
      .pipe(map(() => {
        this.setItems(email, password, "false");
    }));
  }

  authenticationSocialService(email: string) {
    this.setItems(email, "", "true");
  }

  setItems(email: string, password: string, socialLogin: string) {
    sessionStorage.setItem(this.USER_EMAIL, email);
    sessionStorage.setItem(this.USER_PASSWORD, password);
    sessionStorage.setItem(this.SOCIAL_LOGIN, socialLogin);
  }

  isLoggedIn(): boolean {
    let email = sessionStorage.getItem(this.USER_EMAIL);
    return email !== null;
  }

  getBasicAuthToken(): string {
    if(this.getSocialLogin() == "true") {
      let email = this.socialEmail;
      let password = this.socialPassword;
      return 'Basic ' + btoa(email + ':' + password);
    }
    else {
      let email = this.getEmailLogged();
      let password = this.getPasswordLogged();
      return 'Basic ' + btoa(email + ':' + password);
    }
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

  getSocialLogin(): string {
    return sessionStorage.getItem(this.SOCIAL_LOGIN);
  }

  logout() {
    sessionStorage.removeItem(this.USER_EMAIL);
    sessionStorage.removeItem(this.USER_PASSWORD);
    sessionStorage.removeItem(this.SOCIAL_LOGIN);
    this.socialAuthService.signOut();
  }
}
