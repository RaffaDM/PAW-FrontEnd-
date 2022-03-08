import { Component,Input, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../models/event';
import { UserRestServiceService } from '../../services/user-rest-service.service';
import {  FileUploadService} from '../../services/file-upload.service';


import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-user-view-event',
  templateUrl: './user-view-event.component.html',
  styleUrls: ['./user-view-event.component.css']
})
export class UserViewEventComponent implements OnInit {
  @Input() event:Event;
  fileName = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,public rest: FileUploadService) { }

  ngOnInit(): void {
    
  }
  onFileSelected(event:any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      this.rest.uploadFile(file).subscribe((result:any) => {
        console.log(result);
        this.fileName = '';
      });
    }
  }
}
