import { Component, OnInit } from '@angular/core';
import { Course } from '../_models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  CourseArray:Course[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"angular",trainer_id:{id:1,fname:"sara"},category_id:{Id:1,name:"web development"}},
  {Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"css",trainer_id:{id:2,fname:"mohamed"},category_id:{Id:2,name:"design"}}];


  ngOnInit(): void {
  }

}
