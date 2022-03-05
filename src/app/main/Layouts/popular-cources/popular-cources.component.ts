import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course.model';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-popular-cources',
  templateUrl: './popular-cources.component.html',
  styleUrls: ['./popular-cources.component.css']
})
export class PopularCourcesComponent implements OnInit {

  constructor(private courseService: CoursesService) { }
  url = 'http://localhost:8000/uploads/courses/';

  courseArray!: Course[];
Array!:Course[];
  courseCount: number[] = [];
  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.courseService.getAllCourses().subscribe(
      (res) => {
        this.courseArray = res;
        this.Array=this.courseArray.slice(0,3);
        console.log(this.courseArray);
        for (let i = 0; i < this.courseArray.length; i++) {
          this.getCountOfStudents(i, this.courseArray[i].id!);
        }
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  getCountOfStudents(index: number, id: number) {
    this.courseService.getCountStudentsInCourse(id).subscribe((res) => {
      this.courseCount[index] = res;
    });
  }
     


}
