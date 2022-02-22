import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course.model';
import { CourseContent } from 'src/app/_models/course_content.model';

@Component({
  selector: 'app-edit-course-content',
  templateUrl: './edit-course-content.component.html',
  styleUrls: ['./edit-course-content.component.css']
})
export class EditCourseContentComponent implements OnInit {
  CourseArray:Course[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"angular",trainer_id:{id:1,fname:"sara"},category_id:{Id:1,name:"web development"}},
  {Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"css",trainer_id:{id:2,fname:"mohamed"},category_id:{Id:2,name:"design"}}];

  CourseContentArray:CourseContent[]=[
    {id:1,course_id:{Id:1,name:"web"},content:"fgghhj jkhbk",name:"week 1"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
