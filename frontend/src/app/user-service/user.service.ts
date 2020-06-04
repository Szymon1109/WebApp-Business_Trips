import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {AuthService} from "../auth-service/auth.service";
import {SocialUser} from "ng4-social-login";

@Injectable()
export class UserService {

  private readonly userUrl: string;
  private headers: HttpHeaders;
  socialUser: SocialUser;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.userUrl = '/api/user';
  }

  public findAllUsers(): Observable<User[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("name", "USER");

    return this.http.get<null>(this.userUrl + "/admin/allByRole", {headers: this.headers, params: params});
  }

  public findAllNotAdmins(): Observable<User[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });

    return this.http.get<null>(this.userUrl + "/admin/allNotAdmins", {headers: this.headers});
  }

  public makeAdmin(email: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });

    return this.http.put<string>(this.userUrl + "/admin/makeAdmin", email, {headers: this.headers});
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl + '/add', user);
  }

  public checkEmail(email: string) {
    let params = new HttpParams().set("email", email);
    return this.http.get<boolean>(this.userUrl + "/exist", {params: params});
  }

  public findByEmail(): Observable<User> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.get<null>(this.userUrl + "/byEmail", {headers: this.headers, params: params});
  }

  public editUser(user: User) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.put<User>(this.userUrl + "/edit", user, {headers: this.headers, params: params});
  }

  public changePwd(password: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.put<string>(this.userUrl + "/change", password, {headers: this.headers, params: params});
  }

  public delete(id: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.delete<null>(this.userUrl + "/admin/delete", {headers: this.headers, params: params});
  }
}
