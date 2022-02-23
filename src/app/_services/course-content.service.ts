import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseContent } from '../_models/course_content.model';

@Injectable({
  providedIn: 'root',
})
export class CourseContentService {


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

  editCourseContent(id:number,updatedContent:CourseContent): Observable<CourseContent> {
    console.log(id);
    console.log(updatedContent);
    
    return this.httpClient.put<CourseContent>(`${environment.baseUrl}Course_content/${id}`,updatedContent);
  }

  deleteCourseContent(id:number){
    console.log(id);

    return this.httpClient.delete<CourseContent>(`${environment.baseUrl}Course_content/${id}`);
  }

}
