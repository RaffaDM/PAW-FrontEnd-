import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(private router: Router, private authServive: AuthRestServiceService) { }

  ngOnInit(): void {
  }
  home(): void {
    this.router.navigate(['/admin']);
  }

  promoters(): void {
    this.router.navigate(['/admin/promoters']);
  }
  users(): void {
    this.router.navigate(['/admin/users']);
  }
  changePass(): void {
    this.router.navigate(['/admin/change-pass']);
  }
  logout():void{
    localStorage.removeItem("currentPerson")
    this.router.navigate(['/login']);
  }
}
