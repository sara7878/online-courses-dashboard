import { Component, OnInit } from '@angular/core';
import { CourseContent } from '../_models/course_content.model';
import { CourseContentService } from '../_services/course-content.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})
export class CourseContentComponent implements OnInit {
  constructor(private CourseContentService: CourseContentService) {}
  coursesContentsArr!: CourseContent[];
  // CourseContentArray: CourseContent[] = [
  //   {
  //     id: 1,
  //     course_id: { id: 1, name: 'web' },
  //     content: 'fgghhj jkhbk',
  //     name: 'week 1',
  //   },
  // ];

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
      }
    );
  }
}
