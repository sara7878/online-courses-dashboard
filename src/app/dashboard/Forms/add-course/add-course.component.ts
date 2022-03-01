import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm , Validators} from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { Course } from 'src/app/_models/course.model';
import { Trainer } from 'src/app/_models/trainer.model';
import { CoursesService } from 'src/app/_services/courses.service';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/post.model';
import { ConstantPool } from '@angular/compiler';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private courseService: CoursesService){}
  // ,private toastrService:ToastrService, private formBuilder:FormBuilder) {}
  ff=new FormData();
  data:Course={
   name:"yomna",
   img:this.ff,
   
  category_id:8,
   trainer_id:8,
   preq:'klnkl',price:0
   ,desc:'knlnlnl'};

 

  resetForm(form: NgForm) {
    form.reset();
  }
  files:any;
  submitted=false;
  form!:FormGroup;
  creatForm(){
    this.form=this.formbuilder.group({
      name:[null,Validators.required],
      category_id:[null,Validators.required],
      price:[null,Validators.required],
      duration:[null,Validators.required],
     preq:[null,Validators.required],
      desc:[null,Validators.required],
      trainer_id:[null,Validators.required],
      image:[null,Validators.required]
    })
  }

  // id  :0,
  //   fname:'yomna',
  //   lname :'hamed',      
  //   gender :'female',//enum
  //   phone :'123456789',
  //   email  :'yomna@gmail.com',
  //   password :'123558755'
  get f(){
    return this.form.controls;

  } 
 

  ngOnInit(): void {
    this.creatForm();
  }
  uploadImage(event:any){
    this.files=event.target.files[0]
    console.log(this.files);

  }
  onsubmit(form:any){
    this.submitted=true;
    if(this.form.invalid){
     console.log("form invalid");
    }
   


    const formdata=new FormData();
    formdata.append("image",this.files,this.files.name);
    
    formdata.append("name",form.value.name);
    formdata.append("category_id",form.value.category_id);
    formdata.append("price",form.value.price);
    formdata.append("duration",form.value.duration);
    formdata.append("trainer_id",form.value.trainer_id);
    formdata.append("desc",form.value.desc);
    formdata.append("preq",form.value.preq);



    this.data.name=form.value.name;
    this.data.img=formdata;
    this.data.price=form.value.price;
    this.data.duration=form.value.duration;
    this.data.trainer_id=form.value.trainer_id;
    this.data.category_id=form.value.category_id;
    this.data.desc=form.value.desc;
    this.data.preq=form.value.preq;


    console.log(this.data);
    this.courseService.create(formdata).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) => {
        console.log('Error adding course');
      }
    );
   }

}
