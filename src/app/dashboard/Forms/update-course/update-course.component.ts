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

  CourseArray:Course[]=[{id:1,price:12,img:"pic-1.png",name:"angular",trainer_id:1,category_id:1,preq:"fchgvh",desc:"ghvjvj",duration:10},

  ]

}
