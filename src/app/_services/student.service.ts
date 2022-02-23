import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../_models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}
  getAllStudents(): Observable<{data:Student[],status: boolean,error: any[]}> {
    return this.httpClient.get<{data:Student[],status: boolean,error: any[]}>(`${environment.baseUrl}students`);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(environment.baseUrl + 'students/' + id);
  }


  deleteStudentById(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(environment.baseUrl + 'students/' + id);
  }


}
