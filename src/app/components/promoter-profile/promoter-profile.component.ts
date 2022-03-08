import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Promoter } from '../../models/promoter';
import { PromoterRestServiceService } from '../../services/promoter-rest-service.service';

@Component({
  selector: 'app-promoter-profile',
  templateUrl: './promoter-profile.component.html',
  styleUrls: ['./promoter-profile.component.css']
})
export class PromoterProfileComponent implements OnInit {
  promoter: Promoter;
  constructor(private router: Router, private route: ActivatedRoute, private rest: PromoterRestServiceService) { }


  ngOnInit(): void {
    this.rest.profile().subscribe((data: Promoter) => {
      this.promoter = data;
    })
  }


  updateProfile(promoter) {
    this.rest.editProfile(promoter).subscribe(data => { alert("Succesfully Update password") }, Error => { alert("failed while updating password") });
    this.router.navigate(['/promoter/profile']);
  }


}
