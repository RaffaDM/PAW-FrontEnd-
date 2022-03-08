import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../models/admin';
import { AdminRestServiceService } from '../../services/admin-rest-service.service';

@Component({
  selector: 'app-admin-change-pass',
  templateUrl: './admin-change-pass.component.html',
  styleUrls: ['./admin-change-pass.component.css']
})
export class AdminChangePassComponent implements OnInit {
  admin:Admin
  constructor(private rest:AdminRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getAdmin().subscribe((data:Admin)=>{
      this.admin=data;
    })
    
  }
  updateAdmin(admin) {
    this.rest.editedPassword(this.admin).subscribe(data => { alert("Succesfully Update password") }, Error => { alert("failed while updating password") });
    this.router.navigate(['/admin/change-pass']);
  }
}
