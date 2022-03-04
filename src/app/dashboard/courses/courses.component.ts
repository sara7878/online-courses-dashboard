import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/_services/courses.service';
import { Course } from '../../_models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private courseService: CoursesService) {}
  // CourseArray: Course[] = [
  //   { id: 2, img: '../../assets/images/faces-clipart/pic-1.png', name: 'css' },
  // ];
  p: number = 1;

  Arr!: Course[];
  url="http://localhost:8000/uploads/courses/"

  ngOnInit(): void {
    this.getAllcourses();
  }

  getAllcourses() {
    this.courseService.getAllCourses().subscribe(
      (res) => {
        this.Arr = res;
        console.log(this.Arr);
      },
      (err) => {
        console.log('cant load data');
      }
    );
  }

  deleteCourse(id:number){
    this.courseService.deleteCourseById(id).subscribe(
      (res) => {
        // this.coursesContentsArr = res;
        console.log(res);
      },
      (err) => {
        console.log('Error deleting course');
      }
    );
  }
}
