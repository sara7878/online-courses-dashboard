import { Injectable } from '@angular/core';
import { Course } from '../_models/course.model';
import { Category } from '../_models/category.model';
import { Trainer } from '../_models/trainer.model';
import { HttpClient } from '@angular/common/http';
//import { url } from "inspector";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}
  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.baseUrl}courses`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(environment.baseUrl + 'courses/' + id);
  }

  addCourse(data: Course): Observable<Course> {
    return this.httpClient.post<Course>(environment.baseUrl + 'courses', data);
  }

  deleteCourseById(id: number): Observable<Course>{
    return this.httpClient.delete<Course>(environment.baseUrl + 'courses/' + id);
  }

  editCourse(id: number, updatedCourse: Course): Observable<Course> {
    console.log(id);
    console.log(updatedCourse);

    return this.httpClient.post<Course>(environment.baseUrl + 'courses/' + id,updatedCourse);
  }
}
