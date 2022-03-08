import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

@Component({
  selector: 'app-promoter-home',
  templateUrl: './promoter-home.component.html',
  styleUrls: ['./promoter-home.component.css']
})
export class PromoterHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Apresentação trabalho ', date: '2021-06-14' },
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
