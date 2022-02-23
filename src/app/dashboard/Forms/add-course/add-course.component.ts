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
  CourseArray:Course[]=[{id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"angular",trainer:{id:1,fname:"sara"},category:{id:1,name:"web development"}},
  {id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"css",trainer:{id:2,fname:"mohamed"},category:{id:2,name:"design"}}];


}
