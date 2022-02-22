import { Component, OnInit } from '@angular/core';
import { CourseContent } from 'src/app/_models/course_content.model';

@Component({
  selector: 'app-edit-course-content',
  templateUrl: './edit-course-content.component.html',
  styleUrls: ['./edit-course-content.component.css']
})
export class EditCourseContentComponent implements OnInit {

  courseContent!:CourseContent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
