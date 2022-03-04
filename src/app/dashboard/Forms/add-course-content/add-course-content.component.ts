import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/_models/course.model';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-add-course-content',
  templateUrl: './add-course-content.component.html',
  styleUrls: ['./add-course-content.component.css'],
})
export class AddCourseContentComponent implements OnInit {

  CourseArray!: Course[];


  newContent: CourseContent = {
    course_id: 0,
    content: '',
    name: '',
  };

  constructor(
    private CourseContentService: CourseContentService,
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe(
      (res) => {
        this.CourseArray = res;
        console.log(this.CourseArray);
      },
      (err) => {
        console.log('cant load data');
        console.log(err);
      }
    );
  }

  addCourseContent(form: NgForm) {
    this.newContent.name = form.value['contentName'];
    this.newContent.content = form.value['courseContent'];
    this.newContent.course_id = form.value['courseId'];
    // console.log(this.newContent);

    this.CourseContentService.addCourseContent(this.newContent).subscribe(
      (res) => {
        // this.coursesContentsArr = res;
        console.log(res);
      },
      (err) => {
        console.log('Error adding course content');
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
