import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Promoter } from '../../models/promoter';
import { AdminRestServiceService } from '../../services/admin-rest-service.service';

@Component({
  selector: 'app-admin-edit-promoter',
  templateUrl: './admin-edit-promoter.component.html',
  styleUrls: ['./admin-edit-promoter.component.css']
})
export class AdminEditPromoterComponent implements OnInit {
  promoter:Promoter

  constructor(private rest:AdminRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var idTemp = this.route.snapshot.params['id'];
    this.rest.getPromotor(idTemp).subscribe((data : Promoter)=>{
      this.promoter = data;
    })
  }

  updatePromoter() {
    this.rest.editPromoter(this.promoter._id , this.promoter ).subscribe(data => { alert("Succesfully Update order") }, Error => { alert("failed while updating order") });
    this.router.navigate(['/admin/promoters']);
  }
}
