import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  CreateQestion(data: Question): Observable<{ data: Question[]; status: boolean; error: any }> {
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.post<{
      data: Question[];
      status: boolean;
      error: any;
    }>(`${environment.baseUrl}questions`, data,{headers});
  }

  editQestion(
    id: number,
    updatedContent: Question
  ): Observable<{ data: Question[]; status: boolean; error: any }> {
    console.log(id);
    console.log(updatedContent);
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.post<{
      data: Question[];
      status: boolean;
      error: any;
    }>(`${environment.baseUrl}questions/${id}`, updatedContent,{headers});
  }

  deleteQestion(id: number) {
    console.log(id);
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.delete<{
      data: Question;
      status: boolean;
      error: any;
    }>(`${environment.baseUrl}questions/${id}`,{headers});
  }
}
