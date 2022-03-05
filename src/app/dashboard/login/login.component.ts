import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private adminService:AdminService,private router: Router)  { }

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
        localStorage.setItem('Authorization', "bearer "+res.access_token)
        this.router.navigate(['/dashboard/home']);

      },
      (err) => {
        console.log('Error login');
        this.router.navigate(['/dashboard/login']);
      }
    )

  }
}