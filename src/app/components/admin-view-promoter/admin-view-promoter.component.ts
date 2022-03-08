import { Component,Input, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Promoter } from '../../models/promoter';
import { AdminRestServiceService } from '../../services/admin-rest-service.service';

import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-admin-view-promoter',
  templateUrl: './admin-view-promoter.component.html',
  styleUrls: ['./admin-view-promoter.component.css']
})
export class AdminViewPromoterComponent implements OnInit {

  @Input() promoter:Promoter;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
  }
 

}
