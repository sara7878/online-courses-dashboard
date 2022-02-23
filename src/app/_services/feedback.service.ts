import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { url } from "inspector";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Feedback } from '../_models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private httpClient: HttpClient) {}

  getAllfeedbacks(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${environment.baseUrl}feedbacks`);
  }

  getFeedbackById(id: number): Observable<Feedback> {
    return this.httpClient.get<Feedback>(
      environment.baseUrl + 'feedbacks/' + id
    );
  }


  deleteFeedbackById(id: number): Observable<Feedback>{
    return this.httpClient.delete<Feedback>(environment.baseUrl + 'feedbacks/' + id);
  }
}
