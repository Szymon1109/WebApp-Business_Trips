import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private readonly userUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic' + btoa('julia@ziel.pl' + ':' + 'Pa$$word1')
    })
  };

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/api/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/all', this.httpOptions)
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl + '/add', user);
  }
}
