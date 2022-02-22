import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../_models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient : HttpClient) { }
  getcourses():Observable<Course[]>{
    return this.httpClient.get<Course[]>(environment.baseUrl+'courses')
  }
}
