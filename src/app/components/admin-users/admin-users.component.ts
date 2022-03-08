import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { AdminRestServiceService } from '../../services/admin-rest-service.service';
import {MatDialog} from '@angular/material/dialog';
import { AdminViewUserComponent } from '../admin-view-user/admin-view-user.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:User[];
  user:User;
  constructor(public dialog: MatDialog,private rest:AdminRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.rest.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }
  getUser(id:string) {
    this.router.navigate(['/admin/user-details/'+id]);
  }
  deleteUser(id:string){
    this.rest.deleteUser(id)
      .subscribe( _ => {
          this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }
  createUser(){
    this.router.navigate(['/admin/create']);
  }
  openDialog(id:string) {
    this.rest.getUser(id).subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
    const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
 
wait(1*250).then(() => {
  let dialogRef = this.dialog.open(AdminViewUserComponent, {data:this.user})
  
  dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.rest.editUser(result._id , result ).subscribe(data => { alert("Succesfully Update user") }, Error => { alert("failed while updating order") });
    }
    console.log('The dialog was closed');
  });
})
    
  }

}
