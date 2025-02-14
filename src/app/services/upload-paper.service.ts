import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadPaperService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  uploadPapers(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/papers/upload`, formData);
  }
  
}
