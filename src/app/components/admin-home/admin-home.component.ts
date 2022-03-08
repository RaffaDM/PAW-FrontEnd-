import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';
import { AdminRestServiceService } from '../../services/admin-rest-service.service'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router, private authServive: AuthRestServiceService,private rest:AdminRestServiceService) { }

  ngOnInit(): void {
  }

}
