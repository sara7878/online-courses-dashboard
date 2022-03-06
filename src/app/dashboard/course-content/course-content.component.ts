import { Component, OnInit } from '@angular/core';
import { CourseContent } from '../../_models/course_content.model';
import { CourseContentService } from '../../_services/course-content.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})
export class CourseContentComponent implements OnInit {
  constructor(private CourseContentService: CourseContentService) {}
  coursesContentsArr!: CourseContent[];


  ngOnInit(): void {
    this.getAllCoursesContents();
  }

  getAllCoursesContents() {
    this.CourseContentService.getAllContents().subscribe(
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
