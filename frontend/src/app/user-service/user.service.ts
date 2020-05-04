import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {AuthService} from "../auth-service/auth.service";

@Injectable()
export class UserService {

  private readonly userUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.userUrl = 'http://localhost:8080/api/user';
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl + '/add', user);
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

  public changePwd(password: String) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams()
      .set("email", email.toString());

    return this.http.put<String>(this.userUrl + "/change", password, {headers: this.headers, params: params});
  }
}
