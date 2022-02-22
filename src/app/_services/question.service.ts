import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../_models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) {}

  getAllQuestion():Observable<{question:Question[]}> {
   return this.httpClient.get<{question:Question[]}>(`${environment.baseUrl}question`);
  }

}
