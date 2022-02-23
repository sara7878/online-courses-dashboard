import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category.model';
import { Course } from '../_models/course.model';
import { Trainer } from '../_models/trainer.model';
import { CoursesService } from '../_services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(private courseService: CoursesService) {}
  CourseArray: Course[] = [
    { id: 2, img: '../../assets/images/faces-clipart/pic-1.png', name: 'css' },
  ];

  Arr!: Course[];

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
