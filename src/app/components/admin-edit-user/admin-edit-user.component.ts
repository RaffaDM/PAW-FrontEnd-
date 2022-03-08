import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { AdminRestServiceService } from '../../services/admin-rest-service.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  user:User

  constructor(private rest:AdminRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var idTemp = this.route.snapshot.params['id'];
    this.rest.getUser(idTemp).subscribe((data : User)=>{
      this.user = data;
    })
  }

  updateUser() {
    this.rest.editUser(this.user._id , this.user ).subscribe(data => { alert("Succesfully Update order") }, Error => { alert("failed while updating order") });
    this.router.navigate(['/admin/users']);
  }

}
