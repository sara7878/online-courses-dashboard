import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course.model';
import { Trainer } from 'src/app/_models/trainer.model';
import { CoursesService } from 'src/app/_services/courses.service';
import { TrainerService } from 'src/app/_services/trainer.service';

@Component({
  selector: 'app-popular-cources',
  templateUrl: './popular-cources.component.html',
  styleUrls: ['./popular-cources.component.css'],
})
export class PopularCourcesComponent implements OnInit {
  coursesArr!: Course[];
  // trainersArr!: Trainer[];
  courseCount: number[] = [];
  start:number=0;
  c_url = 'http://localhost:8000/uploads/courses/';
  t_url = 'http://localhost:8000/uploads/trainer/';

  constructor(
    private courseService: CoursesService,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe(
      (res) => {
        console.log(res);
        this.start = Math.floor(Math.random() * res.length);
        this.coursesArr = res.slice(
          this.start,
          this.start + 3
        );

        console.log(this.coursesArr);
        for (let i = 0; i < this.coursesArr.length; i++) {
          this.getCountOfStudents(i, this.coursesArr[i].id!);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCountOfStudents(index: number, id: number) {
    this.courseService.getCountStudentsInCourse(id).subscribe((res) => {
      this.courseCount[index] = res;
    });
  }

 
}
