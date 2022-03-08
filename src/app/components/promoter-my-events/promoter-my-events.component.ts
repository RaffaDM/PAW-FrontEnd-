import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import { PromoterRestServiceService } from '../../services/promoter-rest-service.service';
import {MatDialog} from '@angular/material/dialog';
import { PromoterViewMyEventsComponent } from '../promoter-view-my-events/promoter-view-my-events.component';
@Component({
  selector: 'app-promoter-my-events',
  templateUrl: './promoter-my-events.component.html',
  styleUrls: ['./promoter-my-events.component.css']
})
export class PromoterMyEventsComponent implements OnInit {
  events:Event[];
  event:Event;
  constructor(public dialog: MatDialog, private rest:PromoterRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getMyEvents();
  }
  
  getMyEvents() {
    this.rest.getMyEvents().subscribe((data: Event[]) => {
      console.log(data);
      this.events = data;
    });
  }
  getEvent(id:string) {
    this.router.navigate(['/promoter/event-details/'+id]);
  }
  deleteEvent(id:string){
    this.rest.deleteEvent(id)
      .subscribe( _ => {
          this.getMyEvents();
        }, (err) => {
          console.log(err);
        }
      );
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
  let dialogRef = this.dialog.open(PromoterViewMyEventsComponent, {data:this.event})
  
  dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.rest.editEvent(result._id , result ).subscribe(data => { alert("Succesfully Update Event") }, Error => { alert("failed while updating order") });
    }
    console.log('The dialog was closed');
  });
})
    
  }

}
