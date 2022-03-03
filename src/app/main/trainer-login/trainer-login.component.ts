import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/_models/trainer.model';
import { TrainerService } from 'src/app/_services/trainer.service';

@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css']
})
export class TrainerLoginComponent implements OnInit {

  constructor(private trainerService:TrainerService) { }

  ngOnInit(): void {
  }

  trainer = {
    email: '',
    password: '',
  };

  checkTrainer(form: NgForm) {
    console.log(form.value);
    this.trainer.email = form.value['email'];
    this.trainer.password = form.value['password'];
// console.log(this.trainer);

    this.trainerService.checkTrainer(this.trainer).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('Authorization', "bearer "+res.access_token);
        localStorage.setItem('id', res.id+"");
        sessionStorage.setItem('role',res.role);
        sessionStorage.setItem('id',res.id+"");
        localStorage.setItem('role',res.role);
      },
      (err) => {
        console.log('Error logging in Trainer');
        console.log(err);
        
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
