import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { Course } from 'src/app/_models/course.model';
import { Trainer } from 'src/app/_models/trainer.model';
import { CategororyService } from 'src/app/_services/categorory.service';
import { CoursesService } from 'src/app/_services/courses.service';
import { TrainerService } from 'src/app/_services/trainer.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  constructor(
    private courseService: CoursesService,
    private categoryService: CategororyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.getCourse(id);
      }
    });
    this.getAllCategories();
  }
  course: Course = {
    name: '',
    trainer_id: 0,
    category_id: 0,
    price: 0,
    duration: 0,
    preq: '',
    desc: '',
  };

  updatedCourse: Course = {
    name: '',
    trainer_id: 0,
    category_id: 0,
    price: 0,
    duration: 0,
    preq: '',
    desc: '',
  };

  categories!: Category[];
  coursesrray!: Course[];

  getAllCategories() {
    this.categoryService.getcategories().subscribe(
      (res) => {
        this.categories = res.data;
        console.log(this.categories);
      },
      (err) => {
        console.log('Error getting all categories');
      }
    );
  }

  getCourse(id: number) {
    this.courseService.getCourseById(id).subscribe(
      (res) => {
        this.course = res;
        console.log(this.course);
      },
      (err) => {
        console.log('Error updating course ', err);
      }
    );
  }

  updateCourse(id: number, form: NgForm) {
    this.updatedCourse.name = form.value['coursename'];
    // this.updatedCourse.img = form.value['courseImage'];
    this.updatedCourse.trainer_id = this.course.trainer_id;
    console.log(form.value['Category']);
    
    this.updatedCourse.category_id = form.value['Category'];
    this.updatedCourse.price = form.value['price'];
    this.updatedCourse.duration = form.value['duration'];
    this.updatedCourse.preq = form.value['preqname'];
    this.updatedCourse.desc = form.value['desc'];

    console.log(`updated:::${this.updatedCourse}`);
    this.courseService.editCourse(id, this.updatedCourse).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
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
