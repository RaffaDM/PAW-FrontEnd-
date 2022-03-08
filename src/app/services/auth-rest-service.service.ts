import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthRestServiceService {

  constructor(private http: HttpClient) { }
  login(email: string, password:string): Observable<AuthRestModelResponse>{
    return this.http.post<AuthRestModelResponse>(endpoint+"login", new LoginModel( email, password));
  }


  logout() {
    localStorage.removeItem('currentPerson');
  }

  register(fname: string,lname: string,gender: string, password: string,email: string,permission:number) :  Observable<AuthRestModelResponse>{
      return this.http.post<any>('http://localhost:3000/api/v1/register', new RegisterModel( fname, lname,gender,password,email,permission))
  }
}

export interface AuthRestModelResponse{

}

export class LoginModel{

  constructor(public email:string, public password:string){}

}
export class RegisterModel{

  constructor(public fname: string, public lname: string,public gender: string, public password: string,public email: string,public permission:number){}

}
