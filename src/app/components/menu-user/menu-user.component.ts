import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  
  constructor(private router: Router, private authServive: AuthRestServiceService) { }
  ngOnInit(): void {
  }
  home(): void {
    this.router.navigate(['/user']);
  }

  events(): void {
    this.router.navigate(['/user/events']);
  }
  myTickets(): void {
    this.router.navigate(['/user/tickets']);
  }
  profile(): void {
    this.router.navigate(['/user/profile']);
  }
  aboutUs(): void {
    this.router.navigate(['/user/aboutUs']);
  }

  logout():void{
    localStorage.removeItem("currentPerson")
    this.router.navigate(['/login']);
  }

}
