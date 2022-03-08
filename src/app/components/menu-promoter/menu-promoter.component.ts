import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-menu-promoter',
  templateUrl: './menu-promoter.component.html',
  styleUrls: ['./menu-promoter.component.css']
})
export class MenuPromoterComponent implements OnInit {

  constructor(private router: Router, private authServive: AuthRestServiceService) { }

  ngOnInit(): void {
  }
  home(): void {
    this.router.navigate(['/promoter']);
  }

  events(): void {
    this.router.navigate(['/promoter/events']);
  }
  myEvents(): void {
    this.router.navigate(['/promoter/myEvents']);
  }
  profile(): void {
    this.router.navigate(['/promoter/profile']);
  }
  logout():void{
    localStorage.removeItem("currentPerson")
    this.router.navigate(['/login']);
  }

}
