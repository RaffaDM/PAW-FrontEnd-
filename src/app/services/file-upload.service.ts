import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const endpointUser = 'http://localhost:3000/api/v1/user/';
const endpointPromoter = 'http://localhost:3000/api/v1/promoter/';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<any>(endpointUser + 'file-upload', formData);
  }
  uploadEvent(file: File): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<any>(endpointUser + 'file-upload', formData);
  }


}
