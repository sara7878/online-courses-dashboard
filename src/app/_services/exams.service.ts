import { HttpClient, HttpHeaders } from '@angular/common/http';
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





getexam(id: number): Observable<{data:Exam,status:boolean,error:any}> {

  return this.httpClient.get<{data:Exam,status:boolean,error:any}> (`${environment.baseUrl}exams/${id}`)
}


addExam(newExam: Exam): Observable<Exam> {
  const token: string = localStorage.getItem('Authorization')!;
  const headers = new HttpHeaders({
    Authorization: token
  })
  console.log(newExam);
   return this.httpClient.post<Exam>(`${environment.baseUrl}exams`,newExam,{headers});
}

editExam(id:number,updatedExam:Exam): Observable<Exam> {
  const token: string = localStorage.getItem('Authorization')!;
  const headers = new HttpHeaders({
    Authorization: token
  })
  console.log(id);
  console.log(updatedExam);
  
  return this.httpClient.post<Exam>(`${environment.baseUrl}exams/${id}`,updatedExam,{headers});
}


deleteExam(id:number){
  console.log(id)
  const token: string = localStorage.getItem('Authorization')!;
  const headers = new HttpHeaders({
    Authorization: token
  })
  return this.httpClient.delete<{data:Exam,status:boolean,error:any}>(`${environment.baseUrl}exams/${id}`,{headers})

}
}
