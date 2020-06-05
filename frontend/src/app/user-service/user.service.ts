import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {AuthService} from "../auth-service/auth.service";
import {SocialUser} from "ng4-social-login";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  private headers: HttpHeaders;
  socialUser: SocialUser;

  private USER_URL = environment.mainUrl + '/api/user';
  private FIND_BY_EMAIL_URL = this.USER_URL + '/byEmail';
  private FIND_ALL_URL = this.USER_URL + '/admin/allByRole';
  private FIND_ALL_NOT_ADMINS_URL = this.USER_URL + '/admin/allNotAdmins';
  private MAKE_ADMIN_URL = this.USER_URL + '/admin/makeAdmin';
  private CHECK_EMAIL_URL = this.USER_URL + '/exist';
  private CHANGE_PWD_URL = this.USER_URL + '/change';
  private ADD_USER_URL = this.USER_URL + '/add';
  private EDIT_USER_URL = this.USER_URL + '/edit';
  private DELETE_USER_URL = this.USER_URL + '/admin/delete';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public findAllUsers(): Observable<User[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("name", "USER");

    return this.http.get<null>(this.FIND_ALL_URL,
        {headers: this.headers, params: params});
  }

  public findAllNotAdmins(): Observable<User[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });

    return this.http.get<null>(this.FIND_ALL_NOT_ADMINS_URL,
        {headers: this.headers});
  }

  public makeAdmin(email: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });

    return this.http.put<string>(this.MAKE_ADMIN_URL, email,
        {headers: this.headers});
  }

  public save(user: User) {
    return this.http.post<User>(this.ADD_USER_URL, user);
  }

  public checkEmail(email: string) {
    let params = new HttpParams().set("email", email);
    return this.http.get<boolean>(this.CHECK_EMAIL_URL,
        {params: params});
  }

  public findByEmail(): Observable<User> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.get<null>(this.FIND_BY_EMAIL_URL,
        {headers: this.headers, params: params});
  }

  public editUser(user: User) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.put<User>(this.EDIT_USER_URL, user,
        {headers: this.headers, params: params});
  }

  public changePwd(password: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.put<string>(this.CHANGE_PWD_URL, password,
        {headers: this.headers, params: params});
  }

  public delete(id: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.delete<null>(this.DELETE_USER_URL,
        {headers: this.headers, params: params});
  }
}
