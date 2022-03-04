import { Injectable } from '@angular/core';
import { Course } from '../_models/course.model';
import { Category } from '../_models/category.model';
import { Trainer } from '../_models/trainer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { url } from "inspector";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}



  // getAllproducts():Observable<{product:product[],numberofProducts:number}>{
  //   const token: string = localStorage.getItem('token')!;
  //   const headers = new HttpHeaders({
  //     authorization: token
  //   })
  // return this.httpClient.get<{product:product[],numberofProducts:number}>(environment.baseUrl+'product',{headers})
//}
  getAllCourses(): Observable<Course[]> {

      return this.httpClient.get<Course[]>(`${environment.baseUrl}courses`);
  }
  // getAllCourses(): Observable<Course[]> {

  //   const token: string = localStorage.getItem('token')!;
  //   const headers = new HttpHeaders({
  //     authorization: token})
  //     return this.httpClient.get<Course[]>(`${environment.baseUrl}courses`,{headers});
  // }
  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(environment.baseUrl + 'courses/' + id);
  }

  create(data:any){
    return this.httpClient.post(environment.baseUrl+'courses',data);
  }

  deleteCourseById(id: number): Observable<Course>{
    return this.httpClient.delete<Course>(environment.baseUrl + 'courses/' + id);
  }

  editCourse(id: number, updatedCourse: Course): Observable<Course> {
    console.log(id);
    console.log(updatedCourse);

    return this.httpClient.post<Course>(environment.baseUrl + 'courses/' + id,updatedCourse);
  }

  enroll(course_id:number)
  {
    return this.httpClient.post(environment.baseUrl+'/student/storeCourse/',course_id);
  }

  getCountStudentsInCourse(id:number):Observable<number>
  {
    return this.httpClient.get<number>(`${environment.baseUrl}student/studentCount/${id}`);
  }

  getCoursesCount(): Observable<number>{
    return this.httpClient.get<number>(`${environment.baseUrl}courses/count`);
  }

}
