import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {AuthService} from "../auth-service/auth.service";

@Injectable()
export class UserService {

  private readonly userUrl: string;

  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.userUrl = 'http://localhost:8080/api/user';
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl + '/add', user);
  }

  public findByEmail(): Observable<User> {
    let email = this.authService.email;
    let params = new HttpParams().set("email", email.toString());

    return this.http.get<User>(this.userUrl + "/byEmail", {headers: this.headers, params: params});
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/all', {headers: this.headers});
  }
}
