import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import {  UserRestServiceService} from '../../services/user-rest-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserViewMyTicketsComponent } from '../user-view-my-tickets/user-view-my-tickets.component';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-user-my-tickets',
  templateUrl: './user-my-tickets.component.html',
  styleUrls: ['./user-my-tickets.component.css']
})
export class UserMyTicketsComponent implements OnInit {
  events:Event[]
  event:Event;
  user:User;
  constructor(public dialog: MatDialog,private rest:UserRestServiceService, private route: ActivatedRoute, private router: Router) { }

 

  ngOnInit(): void {
    this.getMyTickets();
    this.rest.profile().subscribe((data : User)=>{
      this.user = data;
    })
  }
 
  getMyTickets() {
    this.rest.getMyTickets().subscribe((data: Event[]) => {
      console.log(data);
      this.events = data;
    });
  }
  getEvent(id:string) {
    this.router.navigate(['/user/event-details/'+id]);
  }

  openDialog(id:string) {
    this.rest.getEvent(id).subscribe((data: Event) => {
      console.log(data);
      this.event = data;
    });

    const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
 
wait(1*250).then(() => {
  let dialogRef = this.dialog.open(UserViewMyTicketsComponent, {data:this.event})
  
  dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.rest.cancelTicket(result._id).subscribe(data => { 
        if(this.user.nCancel==4){
          alert("Foi expulso da plataforma!\n Para tentar recuperar a conta contacte o admin.")
          localStorage.removeItem("currentPerson")
          this.router.navigate(['/login']);
        }
       }, Error => { alert("failed while updating order") });
    }
    console.log('The dialog was closed');
  });
})
    
  }
}
