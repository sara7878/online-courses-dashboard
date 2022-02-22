import { Injectable } from '@angular/core';
import { Course } from '../_models/course.model';
import { Category } from '../_models/category.model';
import { Trainer } from '../_models/trainer.model';
import { HttpClient } from "@angular/common/http";
//import { url } from "inspector";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }
  getAllCourses(): Observable<{course:Course[]}>{
    return this.httpClient.get<{course:Course[]}>(`${environment.baseUrl}courses`)
   
 
     
 }
 
 getCourseById(id: number): Observable<Course> {
   return this.httpClient.get<Course>(environment.baseUrl+'courses/'+id)
 }
 
}
