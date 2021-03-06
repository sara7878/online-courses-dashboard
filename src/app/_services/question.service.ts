import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../_models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {}

  getAllQuestion(): Observable<{
    data: Question[];
    status: boolean;
    error: any;
  }> {
    return this.httpClient.get<{
      data: Question[];
      status: boolean;
      error: any;
    }>(`${environment.baseUrl}questions`);
  }

  getoneQestion(
    id: number
  ): Observable<{ data: Question; status: boolean; error: any }> {
    return this.httpClient.get<{ data: Question; status: boolean; error: any }>(
      `${environment.baseUrl}questions/${id}`
    );
  }

  CreateQestion(
    data: Question
  ): Observable<{ data: Question[]; status: boolean; error: any }> {
    return this.httpClient.post<{
      data: Question[];
      status: boolean;
      error: any;
    }>(`${environment.baseUrl}questions`, data);
  }

  editQestion(
    id: number,
    updatedContent: Question
  ): Observable<{ data: Question[]; status: boolean; error: any }> {
    console.log(id);
    console.log(updatedContent);
    return this.httpClient.post<{
      data: Question[];
      status: boolean;
      error: any;
    }>(`${environment.baseUrl}questions/${id}`, updatedContent);
  }

  deleteQestion(id: number) {
    console.log(id);
    return this.httpClient.delete<{
      data: Question;
      status: boolean;
      error: any;
    }>(`${environment.baseUrl}questions/${id}`);
  }
}
