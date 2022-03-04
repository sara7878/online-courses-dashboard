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
 

  data={email:"",password:""}

  login(form: NgForm){
    if(form.invalid){
      return;
    }
    // console.log(form);
    
    this.data.email=form.value.email
    this.data.password=form.value.password

    console.log(this.data);

    this.studentService.checkStudent(this.data).subscribe(
      (res)=>{

        localStorage.setItem('Authorization', "bearer "+res.access_token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('id', res.id+"");
        sessionStorage.setItem('role',res.role);
        sessionStorage.setItem('id',res.id+"");
      },
      (err) => {
        console.log('Error login');
      }
    )

  }

}
