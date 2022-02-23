import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course.model';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';

@Component({
  selector: 'app-add-course-content',
  templateUrl: './add-course-content.component.html',
  styleUrls: ['./add-course-content.component.css'],
})
export class AddCourseContentComponent implements OnInit {
  

  CourseArray: Course[] = [
 
    {
      id: 2,
      img: '../../assets/images/faces-clipart/pic-1.png',
      name: 'css',
      trainer_id: 2,
      category_id:2
    },
  ];

  
  constructor() {}

  ngOnInit(): void {
  }

  
}
