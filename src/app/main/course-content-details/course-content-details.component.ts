import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course.model';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-course-content-details',
  templateUrl: './course-content-details.component.html',
  styleUrls: ['./course-content-details.component.css'],
})
export class CourseContentDetailsComponent implements OnInit {
  constructor(
    private CourseContentService: CourseContentService,
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService
  ) {}
  coursesContentsArr!: CourseContent[];
course!:Course;
  id: number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['courseId'];
      console.log(params);
    });
    this.getAllCoursesContents();
    this.getCourseById(this.id);
  }

  getCourseById(id:number){
    this.courseService.getCourseById(id).subscribe(
      res=>{
        console.log(res);
        this.course = res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  getAllCoursesContents() {
    this.CourseContentService.getContentofspacificCourse(this.id).subscribe(
      (res) => {
        this.coursesContentsArr = res;
        console.log(this.coursesContentsArr);
      },
      (err) => {
        console.log('Error getting courses contents');
        console.log(err);
      }
    );
  }

  deleteCourseContent(id: number) {
    this.CourseContentService.deleteCourseContent(id).subscribe(
      (res) => {
        // this.coursesContentsArr = res;
        console.log(res);
      },
      (err) => {
        console.log('Error deleting course content');
        console.log(err);
      }
    );
  }
}
