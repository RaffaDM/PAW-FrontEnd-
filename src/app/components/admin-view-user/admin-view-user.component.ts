import { Component,Input, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { AdminRestServiceService } from '../../services/admin-rest-service.service';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.css']
})
export class AdminViewUserComponent implements OnInit {
  @Input() user:User;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any  ) { }

  ngOnInit(): void {
    
  }

}
