import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CourseArray:Course[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"angular",trainer_id:{id:1,fname:"sara"},category_id:{Id:1,name:"web development"}},
  {Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"css",trainer_id:{id:2,fname:"mohamed"},category_id:{Id:2,name:"design"}}];


}