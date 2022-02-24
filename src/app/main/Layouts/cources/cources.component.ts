import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course.model';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

  constructor(private courseService:CoursesService) { }

  // CategoryArray:Category[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"web development",created_at:"19/3",updated_at:"2147"},{Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"design development",created_at:"19/3",updated_at:"2147"}];
  courseArray!:Course[];
  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.courseService.getAllCourses().subscribe(
      (res)=>{
        this.courseArray=res;
        console.log(res);
        
      },
      (err)=>{
        console.log(err);
      },
      ()=>{}
    );}
    
}
