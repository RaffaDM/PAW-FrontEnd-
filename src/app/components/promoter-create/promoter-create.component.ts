import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromoterRestServiceService } from '../../services/promoter-rest-service.service';


@Component({
  selector: 'app-promoter-create',
  templateUrl: './promoter-create.component.html',
  styleUrls: ['./promoter-create.component.css']
})
export class PromoterCreateComponent implements OnInit {

  name: string;
  category:string;
  address: {
    street: string;
    post_code: string;
    city: string;
    country: string;
  };
  capacity: number;
  current: number;
  date: Date;
  price: number;
  activate: boolean;


  constructor(private router: Router, private promoterServive: PromoterRestServiceService) {

     this.name= ""
     this.category=""
     this.address= {
        street: "",
        post_code: "",
        city: "",
        country: ""
      }
      this.capacity= 0
      this.current=0
      this.date= new Date
      this.price= 0
      this.activate= true
   
  }


  ngOnInit(): void {
  }

  createEvent() {
    this.promoterServive.createEvent(this.name,this.category,this.address,this.capacity,this.date,this.price,this.activate).subscribe((event: any) => {
      if (event.name != undefined) {
        alert("Create with success ");
        window.location.reload();
      } else {
        alert("Event can not be created")
        this.router.navigate(['/admin/create']);
      }
    })
  }

}
