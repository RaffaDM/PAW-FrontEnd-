import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Admin } from '../models/admin';
import { Promoter } from '../models/promoter';
import { User } from '../models/user';

const endpoint = 'http://localhost:3000/api/v1/admin/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class AdminRestServiceService {

  constructor(private http: HttpClient) { }

  //!Criar user ou Promoter
  createPromoter(promoter:Promoter): Observable<Promoter> {
    return this.http.post<Promoter>(endpoint + 'create', JSON.stringify(promoter), httpOptions);
  }
  createUser(user:User): Observable<User> {
    return this.http.post<User>(endpoint + 'create', JSON.stringify(user), httpOptions);
  }
  //!User Management
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(endpoint +'users' );
  }
  getUser(id:string): Observable<User> {
    return this.http.get<User>(endpoint+'user/'+id);
  }
  editUser(id:string,editedUser:User): Observable<User> {
    return this.http.put<User>(endpoint+'user/'+id,JSON.stringify(editedUser), httpOptions);
  }
  deleteUser (id:string): Observable<User> {
    return this.http.delete<User>(endpoint + 'user/' + id, httpOptions);
  }
  //!Promoter Management
  getPromoters(): Observable<Promoter[]> {
    return this.http.get<Promoter[]>(endpoint +'promoters' );
  }
  getPromotor(id:string): Observable<Promoter> {
    return this.http.get<Promoter>(endpoint+'promoter/'+id);
  }
  editPromoter(id:string,editedPromoter:Promoter): Observable<Promoter> {
    return this.http.put<Promoter>(endpoint+'promoter/'+id,JSON.stringify(editedPromoter), httpOptions);
  }
  deletePromoter (id:string): Observable<Promoter> {
    return this.http.delete<Promoter>(endpoint + 'promoter/' + id, httpOptions);
  }

  //!Change Password
  editedPassword( admin:Admin): Observable<Admin> {
    return this.http.put<Admin>(endpoint+'changePass',JSON.stringify(admin), httpOptions);
  }
  getAdmin(): Observable<Admin> {
    return this.http.get<Admin>(endpoint+'getAdmin');
  }

}
