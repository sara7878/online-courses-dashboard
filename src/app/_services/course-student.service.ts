import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseStudent } from '../_models/course_student.model';


@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  constructor(private httpClient: HttpClient) { }
  // CreateQestion(data: CourseStudent): Observable<{data:CourseStudent}>{
  //   return this.httpClient.post<{data:CourseStudent}>(`${environment.baseUrl}student/storeCourse/{id}`,data);
  // }
  enroll(data:any)
  {
    
    return this.httpClient.post(environment.baseUrl+'student/storeCourse',data);
  }

}
