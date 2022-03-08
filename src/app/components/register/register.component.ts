import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from '../../services/auth-rest-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: string;
  lname: string;
  gender: string;
  password: string;
  email: string;
  permission: number;


  constructor(private router: Router, private authServive: AuthRestServiceService) {
    this.fname = "";
    this.lname = "";
    this.gender = "";
    this.password = "";
    this.email = "";
    this.permission = 0;
  }
  ngOnInit(): void {
  }

  register(): void {
    this.authServive.register(this.fname, this.lname, this.gender, this.password, this.email, this.permission).subscribe((person: any) => {
      if (person.email != undefined) {
        alert("Welcome " + person.fname + " " + person.lname + " now you can login!");
        this.router.navigate(['/login']);
      } else {
        alert("Email is being used!")
        this.router.navigate(['/register']);
      }
    })
  }
  login(): void {
    this.router.navigate(['/login']);
  }
}
