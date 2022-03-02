import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../_models/student.model';
interface student {
  id:number,
  role:string,
  access_token:any,
  token_type: any,
  expires_in: any
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {



 
  constructor(private httpClient: HttpClient) {}
  getAllStudents(): Observable<{data:Student[],status: boolean,error: any[]}> {
    return this.httpClient.get<{data:Student[],status: boolean,error: any[]}>(`${environment.baseUrl}students`);
  }

  addStudent(newStudent: Student): Observable<{data:Student,status: boolean,error: any[]}> {
  
     return this.httpClient.post<{data:Student,status: boolean,error: any[]}>(`${environment.baseUrl}students`,newStudent);
  }

  
  getStudentById(id: number): Observable<{data:Student,status: boolean,error: any[]}> {
    return this.httpClient.get<{data:Student,status: boolean,error: any[]}>(environment.baseUrl + 'students/' + id);
  }


  deleteStudentById(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(environment.baseUrl + 'students/' + id);
  }

  updateStudent(id:number, updatedStudent:any): Observable<{data:Student,status: boolean,error: any[]}>{
    return this.httpClient.post<{data:Student,status: boolean,error: any[]}>(`${environment.baseUrl}students/${id}`,updatedStudent);
  }

  checkStudent(data:any): Observable<student>{
    console.log(data);
    return this.httpClient.post<student>(environment.baseUrl+'login/student',data);
  }
}
