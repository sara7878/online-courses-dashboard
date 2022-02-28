import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private adminService:AdminService) { }

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

    this.adminService.Adminlogin(this.data).subscribe(
      (res)=>{
        localStorage.setItem('token', res.access_token)
      },
      (err) => {
        console.log('Error login');
      }
    )

  }
}
