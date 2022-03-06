import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class MainLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  Click(){
    this.router.navigate(['/main/trainer/login'])
}
ClickStudent(){
  this.router.navigate(['/main/login/student'])

}

}
