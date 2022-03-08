import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import { UserRestServiceService } from '../../services/user-rest-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserViewEventComponent } from '../user-view-event/user-view-event.component';
import { nextTick } from 'process';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {
  events: Event[]
  event: Event;
  constructor(public dialog: MatDialog, private rest: UserRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.rest.getEvents().subscribe((data: Event[]) => {
      console.log(data);
      this.events = data;
    });
  }
  getEvent(id: string) {
    this.router.navigate(['/user/event-details/' + id]);
  }

  openDialog(id: string) {

    this.rest.getEvent(id).subscribe((data: Event) => {
      console.log(data);
      this.event = data;
    });
    const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
 
    wait(1*250).then(() => {
      let dialogRef = this.dialog.open(UserViewEventComponent, { data: this.event })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.rest.buyTicket(result._id).subscribe(data => {
            alert("Succesfully Update Ticket")
          }, Error => { alert("failed while updating order") });
        }
        console.log('The dialog was closed');
      });
  
    })

  


  }


}
