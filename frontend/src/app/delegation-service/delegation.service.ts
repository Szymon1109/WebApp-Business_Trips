import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "../auth-service/auth.service";
import {Observable} from "rxjs";
import {Delegation} from "../model/delegation";

@Injectable()
export class DelegationService {

  private readonly delegationUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.delegationUrl = 'http://localhost:8080/api/delegation';
  }

  public findByEmail(): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.email;
    let params = new HttpParams().set("email", email.toString());

    return this.http.get<Delegation[]>(this.delegationUrl + "/allByUser", {headers: this.headers, params: params});
  }

  public findFutureByEmail(): Observable<Delegation> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.email;
    let params = new HttpParams().set("email", email.toString());

    return this.http.get<Delegation>(this.delegationUrl + "/futureByUser", {headers: this.headers, params: params});
  }

  public addDelegation(delegation: Delegation) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.email;
    let params = new HttpParams().set("email", email.toString());

    return this.http.post<Delegation>(this.delegationUrl + "/add", delegation, {headers: this.headers, params: params});
  }

  public editDelegation(delegation: Delegation) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams()
      .set("id", delegation.id.toString());

    return this.http.put<Delegation>(this.delegationUrl + "/change", delegation, {headers: this.headers, params: params});
  }

  public deleteDelegation(id: number) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams()
      .set("id", id.toString());

    return this.http.delete(this.delegationUrl + "/delete", {headers: this.headers, params: params});
  }
}
