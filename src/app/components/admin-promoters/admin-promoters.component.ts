import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Promoter } from '../../models/promoter';
import { AdminRestServiceService } from '../../services/admin-rest-service.service';

import {MatDialog} from '@angular/material/dialog';
import { AdminViewPromoterComponent } from '../admin-view-promoter/admin-view-promoter.component';

@Component({
  selector: 'app-admin-promoters',
  templateUrl: './admin-promoters.component.html',
  styleUrls: ['./admin-promoters.component.css']
})
export class AdminPromotersComponent implements OnInit {
  promoters:Promoter[];
  promoter:Promoter;


  constructor(private rest:AdminRestServiceService, private route: ActivatedRoute, private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPromoters();

  }

  getPromoters() {
    this.rest.getPromoters().subscribe((data: Promoter[]) => {
      console.log(data);
      this.promoters = data;
    });
  }
  getPromoter(id:string) {
    this.router.navigate(['/admin/promoter-details/'+id]);
  }
  deletePromoter(id:string){
    this.rest.deletePromoter(id)
      .subscribe( _ => {
          this.getPromoters();
        }, (err) => {
          console.log(err);
        }
      );
  }
  createPromoter(){
    this.router.navigate(['/admin/create']);
  }
  openDialog(id:string) {
    this.rest.getPromotor(id).subscribe((data: Promoter) => {
      console.log(data);
      this.promoter = data;
    });
    const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
 
wait(1*250).then(() => {
  let dialogRef = this.dialog.open(AdminViewPromoterComponent, {data:this.promoter})
  
  dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.rest.editPromoter(result._id , result ).subscribe(data => { alert("Succesfully Update promoter") }, Error => { alert("failed while updating order") });
    }
    console.log('The dialog was closed');
  });
})
    
  }
}

