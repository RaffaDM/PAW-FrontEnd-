import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserRestServiceService } from '../../services/user-rest-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;
  constructor(private router: Router, private route: ActivatedRoute, private rest:UserRestServiceService) { }

  ngOnInit(): void {
   
    this.rest.profile().subscribe((data : User)=>{
      this.user = data;
    })
  }
  updateProfile(user) {
    this.rest.editProfile(user).subscribe(data => { alert("Succesfully Update password") }, Error => { alert("failed while updating password") });
    this.router.navigate(['/user/profile']);
  }
}
