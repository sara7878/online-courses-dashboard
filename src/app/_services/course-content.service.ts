import { Injectable } from '@angular/core';
import { CourseContent } from '../_models/course_content.model';

@Injectable({
  providedIn: 'root',
})
export class CourseContentService {
  coursesContents: CourseContent[] = [
    {
      Id: 1,
      name: 'Week 1',
      course_id: {
        Id: 1,
        name: 'CSS',
      },
      content: 'this is week 1 content',
    },
  ];

  constructor() {}

  getAllContents(): CourseContent[] {
    return this.coursesContents;
  }

  getCourseContent(id: number): CourseContent {
    return this.coursesContents.find((c) => c.course_id.Id === id)!;
  }

  
}
