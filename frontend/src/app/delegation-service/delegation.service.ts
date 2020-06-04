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
    this.delegationUrl = '/api/delegation';
  }

  public findByEmailAndConfirmation(isConfirmed: boolean): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams()
      .set("email", email.toString())
      .set("isConfirmed", isConfirmed.toString());

    return this.http.get<Delegation[]>(this.delegationUrl + "/allByUserAndConfirmation", {headers: this.headers, params: params});
  }

  public findNotRequestedByEmailAndConfirmation(isConfirmed: boolean): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams()
      .set("email", email.toString())
      .set("isConfirmed", isConfirmed.toString());

    return this.http.get<Delegation[]>(this.delegationUrl + "/allNotRequestedByUserAndConfirmation", {headers: this.headers, params: params});
  }

  public findRequestedByEmailAndConfirmation(status: boolean): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("status", status.toString());

    return this.http.get<Delegation[]>(this.delegationUrl + "/admin/allByStatus", {headers: this.headers, params: params});
  }

  public findFutureByEmail(): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.get<Delegation[]>(this.delegationUrl + "/futureByUser", {headers: this.headers, params: params});
  }

  public findAllByEmail(email: string): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("email", email);

    return this.http.get<Delegation[]>(this.delegationUrl + "/allByUser", {headers: this.headers, params: params});
  }

  public requestByStatus(id: string, status: boolean) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.put<Delegation>(this.delegationUrl + "/requestByStatus", status, {headers: this.headers, params: params});
  }

  public answerRequest(id: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });

    return this.http.put<Delegation>(this.delegationUrl + "/admin/answerRequestById", id, {headers: this.headers});
  }

  public addDelegation(delegation: Delegation) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.post<Delegation>(this.delegationUrl + "/add", delegation, {headers: this.headers, params: params});
  }

  public editDelegation(id: string, delegation: Delegation) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.put<Delegation>(this.delegationUrl + "/change", delegation, {headers: this.headers, params: params});
  }

  public deleteDelegation(id: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.delete(this.delegationUrl + "/delete", {headers: this.headers, params: params});
  }
}
