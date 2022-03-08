import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from '../models/event';
import { User } from '../models/user';
import { Ticket } from '../models/tickets';

const endpoint = 'http://localhost:3000/api/v1/user/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserRestServiceService {

  constructor(private http: HttpClient) { }
  profile(): Observable<User> {
    return this.http.get<User>(endpoint + 'profile');
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(endpoint + 'events');
  }
  getMyTickets(): Observable<Event[]> {
    return this.http.get<Event[]>(endpoint + 'myTickets');
  }
  buyTicket(id:string): Observable<Ticket> {
    return this.http.post<Ticket>(endpoint + 'buyTicket/' + id, httpOptions);
  }
  cancelTicket(id:string): Observable<Ticket> {
    return this.http.delete<Ticket>(endpoint + 'cancelTicket/' + id, httpOptions);
  }
  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(endpoint + 'showEvent/' + id);
  }
  deleteEvent(id: string): Observable<Event> {
    return this.http.delete<Event>(endpoint + 'cancelTicket/' + id, httpOptions);
  }
  editProfile(editedUser: User): Observable<User> {
    return this.http.put<User>(endpoint + 'profile' , JSON.stringify(editedUser), httpOptions);
  }
}
