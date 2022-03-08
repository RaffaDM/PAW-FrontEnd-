import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Event } from '../models/event';
import { Promoter } from '../models/promoter';

const endpoint = 'http://localhost:3000/api/v1/promoter/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PromoterRestServiceService {

  constructor(private http: HttpClient) { }
  //!Events Management
  profile(): Observable<Promoter> {
    return this.http.get<Promoter>(endpoint + 'profile/');
  }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(endpoint + 'showAll');
  }
  getActEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(endpoint + 'eventsAct');
  }
  getMyEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(endpoint + 'showMy');
  }
  createEvent( name: string, category:string,  address: any, capacity: number, date:Date,  price:number, activate:boolean): Observable<Event> {
    return this.http.post<Event>(endpoint + 'createEvent', new EventModel( name, category,address,capacity,date,price,activate));
  }
  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(endpoint + 'event/' + id);
  }
  editEvent(id:string,editedEvent: Event): Observable<Event> {
    return this.http.put<Event>(endpoint + 'event/' + id, JSON.stringify(editedEvent), httpOptions);
  }
  deleteEvent(id: string): Observable<Event> {
    return this.http.delete<Event>(endpoint + 'event/' + id, httpOptions);
  }
  editProfile(editedpromoter: Promoter): Observable<Promoter> {
    return this.http.put<Promoter>(endpoint + 'profile' , JSON.stringify(editedpromoter), httpOptions);
  }
}
export class EventModel{

  constructor(public name: string,public category:string, public address: any,public capacity: number,public date:Date, public price:number,public activate:boolean){}

}