import { Component, OnInit } from '@angular/core';
import { Course } from '../../_models/course.model';
import { CourseService } from '../../_services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // CourseArray:Course[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"angular",trainer_id:{id:1,fname:"sara"},category_id:{Id:1,name:"web development"}},
  // {Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"css",trainer_id:{id:2,fname:"mohamed"},category_id:{Id:2,name:"design"}}];
  constructor(private courseService:CourseService) { }

  // CategoryArray:Category[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"web development",created_at:"19/3",updated_at:"2147"},{Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"design development",created_at:"19/3",updated_at:"2147"}];
  courseArray!:Course[];
  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.courseService.getcourses().subscribe(
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
