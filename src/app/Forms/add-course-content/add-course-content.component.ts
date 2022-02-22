import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/_models/course.model';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';

@Component({
  selector: 'app-add-course-content',
  templateUrl: './add-course-content.component.html',
  styleUrls: ['./add-course-content.component.css'],
})
export class AddCourseContentComponent implements OnInit {
  newContent: CourseContent={
      course_id: 0,
      content: '',
      name: ''
  };

  CourseArray: Course[] = [
    {
      id: 1,
      img: '../../assets/images/faces-clipart/pic-1.png',
      name: 'angular',
      trainer_id: { id: 1, fname: 'sara' },
      category_id: { Id: 1, name: 'web development' },
    },
    {
      id: 2,
      img: '../../assets/images/faces-clipart/pic-1.png',
      name: 'css',
      trainer_id: { id: 2, fname: 'mohamed' },
      category_id: { Id: 2, name: 'design' },
    },
  ];

  // CourseContentArray: CourseContent[] = [
  //   {
  //     id: 1,
  //     course_id: { id: 1, name: 'angular' },
  //     content: 'fgghhj jkhbk',
  //     name: 'week 1',
  //   },
  // ];
  constructor(private CourseContentService: CourseContentService) {}

  ngOnInit(): void {

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
