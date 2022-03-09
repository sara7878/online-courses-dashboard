import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Student } from 'src/app/_models/student.model';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {


  constructor( private studentService: StudentService) { }
  ngOnInit(): void {

  }
   studentArray!: Student[];


  newStudent: Student = {
    fname:'',
    lname:'',
    gender:'',//enum
    phone:'',
    email:'',
    password:''

};


  addStudent(form: NgForm) {
    this.newStudent.fname = form.value['fname'];
    this.newStudent.lname = form.value['lname'];
    this.newStudent.gender= form.value['gender'];
    this.newStudent.phone = form.value['phone'];
    this.newStudent.email = form.value['email'];
    this.newStudent.password= form.value['password'];

    // console.log(this.newContent);

    this.studentService.addStudent(this.newStudent).subscribe(
      (res) => {
        // this.coursesContentsArr = res;
        // console.log(res.data);

      },
      (err) => {
        console.log('Error adding student');
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    // console.log(form.value);
  }

  resetForm(form: NgForm) {
    form.reset();
  }

}
