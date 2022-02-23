import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Exam } from '../_models/exam.model';
import { Question } from '../_models/question.model';
@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private httpClient: HttpClient) { }
 
 getAllExams():Observable<{data:Exam[],status:boolean,error:any}>{
  return this.httpClient.get<{data:Exam[],status:boolean,error:any}>(environment.baseUrl+'exams')
}



}
