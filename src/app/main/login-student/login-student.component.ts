import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  constructor(private studentService: StudentService
    ) { }

  ngOnInit(): void {
  }  
  student = {
    email: '',
    password: '',
  };

  checkStudent(form: NgForm) {
    console.log(form.value);
    this.student.email = form.value['email'];
    this.student.password = form.value['password'];
// console.log(this.trainer);

    this.studentService.checkStudent(this.student).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('Authorization', "bearer "+res.access_token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('id', res.id+"");
        sessionStorage.setItem('role',res.role);
        sessionStorage.setItem('id',res.id+"");
      },
      (err) => {
        console.log('Error logging in student');
        console.log(err);
        
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }

}
