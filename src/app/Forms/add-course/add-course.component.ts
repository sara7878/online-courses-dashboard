import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Course } from 'src/app/_models/course.model';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private courseService:CoursesService) { }
  newCourse: Course={
    id: 0,
 
    name: '',
   trainer_id:1,
   category_id:1,
    img:'',
    price:0,
    duration:5,
    preq:'',
    desc:''
};

  ngOnInit(): void {
  
  }



  addCourse(form: NgForm) {
    this.newCourse.name = form.value['name'];
    this.newCourse.img=form.value['courseImage'];
    this.newCourse.trainer_id=form.value['trainer'];
    this.newCourse.category_id=form.value['Category'];
    this.newCourse.price=form.value['price'];
    this.newCourse.duration=form.value['duration'];
    this.newCourse.preq=form.value['preq']
    this.newCourse.desc=form.value['desc'];





  
    console.log(this.newCourse);

  


    this.courseService.create(this.newCourse).subscribe(
      (res) => {
        // this.coursesContentsArr = res;
        console.log(res);
      },
      (err) => {
        console.log('Error adding course content');
      }
    );
  }

  onsubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }

}

