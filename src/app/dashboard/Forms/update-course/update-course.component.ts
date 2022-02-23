import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course.model';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options=[13,47,12]
  CourseArray:Course[]=[{id:1,price:12,img:"pic-1.png",name:"angular",trainer_id:{id:1,fname:"sara"},category_id:{id:1,name:"web development"},preq:"fchgvh",desc:"ghvjvj",duration:10},
  {id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"css",trainer_id:{id:2,fname:"mohamed"},category_id:{id:2,name:"design"}}];


}
