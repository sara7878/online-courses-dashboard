import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course.model';
import { CategororyService } from 'src/app/_services/categorory.service';

@Component({
  selector: 'app-category-courses',
  templateUrl: './category-courses.component.html',
  styleUrls: ['./category-courses.component.css']
})
export class CategoryCoursesComponent implements OnInit {

  coursesArray!:Course[];

  constructor(private activatedRoute:ActivatedRoute,private categoryService:CategororyService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['categoryId'];
      console.log(params);
      if (id) {
        this.getCoursesOfCategory(id);
        // console.log(this.coursedetails);
      }
    });
  }

  getCoursesOfCategory(id:number){
    this.categoryService.getCoursesOfCategory(id).subscribe(
      res=>{
        console.log(res);
        this.coursesArray = res.data.courses!;
      },
      err=>{
        console.log(err);
        
      }
    );
  }

}
