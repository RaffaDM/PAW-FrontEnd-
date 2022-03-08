import { Component,Input, OnInit,Inject } from '@angular/core';
import { Event } from 'src/app/models/event';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-user-view-my-tickets',
  templateUrl: './user-view-my-tickets.component.html',
  styleUrls: ['./user-view-my-tickets.component.css']
})
export class UserViewMyTicketsComponent implements OnInit {
  @Input() event:Event;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
    
  }
}
