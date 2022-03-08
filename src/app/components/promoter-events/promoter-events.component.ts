import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import { PromoterRestServiceService } from '../../services/promoter-rest-service.service';

import {MatDialog} from '@angular/material/dialog';
import { PromoterViewEventComponent } from '../promoter-view-event/promoter-view-event.component';
@Component({
  selector: 'app-promoter-events',
  templateUrl: './promoter-events.component.html',
  styleUrls: ['./promoter-events.component.css']
})
export class PromoterEventsComponent implements OnInit {
event:Event;
  events:Event[]
  constructor(public dialog: MatDialog,private rest:PromoterRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  
  getEvents() {
    this.rest.getEvents().subscribe((data: Event[]) => {
      console.log(data);
      this.events = data;
    });
  }
  getEvent(id:string) {
    this.router.navigate(['/promoter/event-details/'+id]);
  }
  createEvent(){
    this.router.navigate(['/promoter/create']);
  }
  openDialog(id:string) {
    this.rest.getEvent(id).subscribe((data: Event) => {
      console.log(data);
      this.event = data;
    });
    const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
 
wait(1*250).then(() => {
  let dialogRef = this.dialog.open(PromoterViewEventComponent, {data:this.event})
  
  dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.rest.editEvent(result._id , result ).subscribe(data => { alert("Succesfully Update promoter") }, Error => { alert("failed while updating order") });
    }
    console.log('The dialog was closed');
  });
})
    
  }
}
