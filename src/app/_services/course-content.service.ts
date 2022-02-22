import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseContent } from '../_models/course_content.model';

@Injectable({
  providedIn: 'root',
})
export class CourseContentService {
  // coursesContents: CourseContent[] = [
  //   {
  //     id: 1,
  //     name: 'Week 1',
  //     course_id: {
  //       id: 1,
  //       name: 'CSS',
  //     },
  //     content: 'this is week 1 content',
  //   },
  // ];

  constructor(private httpClient:HttpClient) {}

  // getAllContents(): CourseContent[] {
  //   return this.coursesContents;
  // }
  getAllContents(): Observable<CourseContent[]> {
    return this.httpClient.get<CourseContent[]>(`${environment.baseUrl}Course_content`);
  }

  // getCourseContent(id: number): CourseContent {
  //   return this.coursesContents.find((c) => c.course_id.Id === id)!;
  // }
  getCourseContent(id: number): Observable<CourseContent> {
    return this.httpClient.get<CourseContent>(`${environment.baseUrl}Course_content/${id}`)
  }


  addCourseContent(newContent : CourseContent): Observable<CourseContent> {
    console.log(newContent);
    
     return this.httpClient.post<CourseContent>(`${environment.baseUrl}Course_content`,newContent);
  }

}
