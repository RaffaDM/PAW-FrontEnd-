import { Component,Input, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import { PromoterRestServiceService } from '../../services/promoter-rest-service.service';

import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-promoter-view-event',
  templateUrl: './promoter-view-event.component.html',
  styleUrls: ['./promoter-view-event.component.css']
})
export class PromoterViewEventComponent implements OnInit {
  @Input() event:Event;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
    
  }
 

}
