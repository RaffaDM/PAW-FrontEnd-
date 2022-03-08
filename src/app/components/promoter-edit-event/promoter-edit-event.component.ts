import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import { PromoterRestServiceService } from '../../services/promoter-rest-service.service';

@Component({
  selector: 'app-promoter-edit-event',
  templateUrl: './promoter-edit-event.component.html',
  styleUrls: ['./promoter-edit-event.component.css']
})
export class PromoterEditEventComponent implements OnInit {
  event:Event
  constructor(private rest:PromoterRestServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var idTemp = this.route.snapshot.params['id'];
    this.rest.getEvent(idTemp).subscribe((data : Event)=>{
      this.event = data;
    })
  }
  
  updateEvent() {
    
    this.rest.editEvent(this.event._id , this.event ).subscribe(data => { alert("Succesfully Update order") }, Error => { alert("failed while updating order") });
    this.router.navigate(['/promoter/myEvents']);
  }

}
