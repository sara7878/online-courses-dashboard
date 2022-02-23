import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course.model';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-edit-course-content',
  templateUrl: './edit-course-content.component.html',
  styleUrls: ['./edit-course-content.component.css'],
})
export class EditCourseContentComponent implements OnInit {

 
  CourseArray!:Course[];
  // CourseContentArray:CourseContent[]=[
  //   {id:1,course_id:1,content:"fgghhj jkhbk",name:"week 1"}
  // ];

  courseContent: CourseContent = {
    course_id: 0,
    content: '',
    name: '',
  };
  updatedContent: CourseContent = {
    course_id: 0,
    content: '',
    name: '',
  };

  constructor(
    private CourseContentService: CourseContentService,
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      // console.log(params);
      if (id) {
        this.getCourseContent(id);
        // console.log(this.courseContent);
      }
    });
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe(
      (res) => {
        this.CourseArray = res;
        // console.log(this.CourseArray);
      },
      (err) => {
        console.log('cant load data');
      }
    );
  }

  getCourseContent(id: number) {
    this.CourseContentService.getCourseContent(id).subscribe(
      (res) => {
        this.courseContent = res;
        // console.log(res);
      },
      (err) => {
        console.log('Error adding course content');
      }
    );
  }

  updateCourseContent(id: number,form:NgForm) {
    this.updatedContent.name = form.value['contentName'];
    this.updatedContent.content = form.value['courseContent'];
    this.updatedContent.course_id = form.value['courseId'];
    console.log(this.updatedContent);
    this.CourseContentService.editCourseContent(id,this.updatedContent).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error updating course content');
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}