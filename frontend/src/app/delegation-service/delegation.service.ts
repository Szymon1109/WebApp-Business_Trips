import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "../auth-service/auth.service";
import {Observable} from "rxjs";
import {Delegation} from "../model/delegation";
import {environment} from "../../environments/environment";

@Injectable()
export class DelegationService {

  private headers: HttpHeaders;

  private DEL_URL = environment.mainUrl + '/api/delegation';
  private FIND_BY_EMAIL_URL = this.DEL_URL + '/allByUser';
  private FIND_FUT_BY_EMAIL_URL = this.DEL_URL + '/futureByUser';
  private FIND_BY_STATUS_URL = this.DEL_URL + '/admin/allByStatus';
  private FIND_BY_EMAIL_AND_CONF_URL = this.DEL_URL + '/allByUserAndConfirmation';
  private FIND_NOT_REQ_BY_EMAIL_AND_CONF_URL = this.DEL_URL + '/allNotRequestedByUserAndConfirmation';
  private REQUEST_BY_STATUS_URL = this.DEL_URL + '/requestByStatus';
  private ANSWER_REQUEST_URL = this.DEL_URL + '/admin/answerRequestById';
  private ADD_DEL_URL = this.DEL_URL + '/add';
  private EDIT_DEL_URL = this.DEL_URL + '/change';
  private DELETE_DEL_URL = this.DEL_URL + '/delete';

  constructor(private http: HttpClient,
              private authService: AuthService) {
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

    return this.http.get<Delegation[]>(this.FIND_BY_EMAIL_AND_CONF_URL,
        {headers: this.headers, params: params});
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

    return this.http.get<Delegation[]>(this.FIND_NOT_REQ_BY_EMAIL_AND_CONF_URL,
        {headers: this.headers, params: params});
  }

  public findRequestedByEmailAndConfirmation(status: boolean): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("status", status.toString());

    return this.http.get<Delegation[]>(this.FIND_BY_STATUS_URL,
        {headers: this.headers, params: params});
  }

  public findFutureByEmail(): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.get<Delegation[]>(this.FIND_FUT_BY_EMAIL_URL,
        {headers: this.headers, params: params});
  }

  public findAllByEmail(email: string): Observable<Delegation[]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("email", email);

    return this.http.get<Delegation[]>(this.FIND_BY_EMAIL_URL,
        {headers: this.headers, params: params});
  }

  public requestByStatus(id: string, status: boolean) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.put<Delegation>(this.REQUEST_BY_STATUS_URL, status,
        {headers: this.headers, params: params});
  }

  public answerRequest(id: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });

    return this.http.put<Delegation>(this.ANSWER_REQUEST_URL, id,
        {headers: this.headers});
  }

  public addDelegation(delegation: Delegation) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let email = this.authService.getEmailLogged();
    let params = new HttpParams().set("email", email.toString());

    return this.http.post<Delegation>(this.ADD_DEL_URL, delegation,
        {headers: this.headers, params: params});
  }

  public editDelegation(id: string, delegation: Delegation) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.put<Delegation>(this.EDIT_DEL_URL, delegation,
        {headers: this.headers, params: params});
  }

  public deleteDelegation(id: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.getBasicAuthToken()
    });
    let params = new HttpParams().set("id", id);

    return this.http.delete(this.DELETE_DEL_URL,
        {headers: this.headers, params: params});
  }
}
