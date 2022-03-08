import { Component,Input, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import { PromoterRestServiceService } from '../../services/promoter-rest-service.service';
interface Category {
  value: string;
}
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-promoter-view-my-events',
  templateUrl: './promoter-view-my-events.component.html',
  styleUrls: ['./promoter-view-my-events.component.css']
})
export class PromoterViewMyEventsComponent implements OnInit {
  @Input() event:Event;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any ) { }
  categorys: Category[] = [
    {value: 'Concert'},
    {value: 'SunSet'},
    {value: 'Party'},
    {value: 'Meeting'}
  ];
  ngOnInit(): void {
    
  }
}
