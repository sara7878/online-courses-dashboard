import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { Course } from 'src/app/_models/course.model';
import { Trainer } from 'src/app/_models/trainer.model';
import { CategororyService } from 'src/app/_services/categorory.service';
import { CoursesService } from 'src/app/_services/courses.service';
import { TrainerService } from 'src/app/_services/trainer.service';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  // categories: Category[] = [
  //   {
  //     id: 1,
  //     img: '../../assets/images/faces-clipart/pic-1.png',
  //     name: 'web development',
  //   },
  //   {
  //     id: 2,
  //     img: '../../assets/images/faces-clipart/pic-1.png',
  //     name: 'design development',
  //   },
  // ];
  // TrainersArray: Trainer[] = [
  //   {
  //     id: 1,
  //     fname: 'sara',
  //     lname: 'mohamed',
  //     phone: '123446',
  //     img: '../../assets/images/faces-clipart/pic-1.png',
  //     email: 'sara.mahamed7878@gmail.com',
  //   },
  //   {
  //     id: 2,
  //     fname: 'salma',
  //     lname: 'mohamed',
  //     phone: '276489',
  //     img: '../../assets/images/faces-clipart/pic-1.png',
  //     email: 'salma.mahamed7878@gmail.com',
  //   },
  // ];
  constructor(
    private courseService: CoursesService,
    private categoryService: CategororyService,
    private trainerService: TrainerService
  ) {}
  // ,private toastrService:ToastrService, private formBuilder:FormBuilder) {}
  categories!: Category[];
  trainers!: Trainer[];
  newCourse: Course = {
    name: '',
    trainer_id: 0,
    category_id: 0,
    img: '',
    price: 0,
    duration: 0,
    preq: '',
    desc: '',
  };

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

  getAllTrainers() {
    this.trainerService.getAllTrainers().subscribe(
      (res) => {
        this.trainers = res.data;
        console.log(this.trainers);
      },
      (err) => {
        console.log('Error getting all trainers');
      }
    );
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllTrainers();
  }

  addCourse(form: NgForm) {
    console.log(form.value);

    this.newCourse.name = form.value['name'];
    // this.newCourse.img = form.value['courseImage'];
    this.newCourse.trainer_id = form.value['trainer'];
    this.newCourse.category_id = form.value['Category'];
    this.newCourse.price = form.value['price'];
    this.newCourse.duration = form.value['duration'];
    this.newCourse.preq = form.value['preq'];
    this.newCourse.desc = form.value['desc'];

    console.log(this.newCourse);

    this.courseService.addCourse(this.newCourse).subscribe(
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

  resetForm(form: NgForm) {
    form.reset();
  }
  
  //   files: any;
  //   submitted : boolean =  false;
  //   form!:NgForm;
  // get f(){
  //   return this.form.controls;
  // }

  // uploadImage(event ) {
  //   this.files = event.target.files[0];
  // }
}
