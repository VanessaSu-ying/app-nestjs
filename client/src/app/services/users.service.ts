import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



import {Observable} from 'rxjs';
import {User} from '../interfaces/users';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL: string ='http://localhost:4000';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User>{
    console.log(user);
    return this.http.post<User>(`${this.BASE_URL}/users`, user);
  }
  
  getUser(id: string): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }

  }




