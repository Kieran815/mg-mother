import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url: string = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient
  ) { }

  // test(): Observable<User[]> {
  //   // return 'Success'
  //   let url = 'http://localhost:3000/api/users'
  //   return this.http.get<User[]>(url);
  // }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user, httpOptions);
  }
}
