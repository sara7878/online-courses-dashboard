import { Component, OnInit } from '@angular/core';
import { CourseContent } from '../_models/course_content.model';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {

  constructor() { }
CourseContentArray:CourseContent[]=[
  {Id:1,course_id:{Id:1,name:"web"},content:"fgghhj jkhbk",name:"week 1"}
]

  ngOnInit(): void {
  }


}
