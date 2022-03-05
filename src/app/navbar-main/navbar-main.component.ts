import { Component, OnInit } from '@angular/core';
import { StudentService } from '../_services/student.service';
import { TrainerService } from '../_services/trainer.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css'],
})
export class NavbarMainComponent implements OnInit {
  constructor(
    private trainserService: TrainerService,
    private studentService: StudentService
  ) {}
  checkUser!: string;
  id: number = parseInt(localStorage.getItem('id')!);
  userName: string = localStorage.getItem('name')!;

  ngOnInit(): void {
    this.checktoken();
    if (localStorage.getItem('role') == 'isTrainer') this.checkUser = 'trainer';
    else this.checkUser = 'student';
  }

  token = false;

  // getCourses() {
  //   if (this.checkUser == 'trainer') {
  //     this.trainserService.getCoursesOfTrainer(this.id).subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   } else {
  //     this.studentService.getCoursesOfStudent(this.id).subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   }
  // }

  checktoken() {
    if (localStorage.getItem('Authorization') === null) {
      this.token = true;
    } else {
      this.token = false;
    }
  }

  logout() {
    if (this.checkUser == 'trainer') {
      this.trainserService.logoutTrainer().subscribe(
        (res) => {
          console.log(res);
          alert(res);
          localStorage.removeItem('Authorization');
          localStorage.removeItem('id');
          localStorage.removeItem('role');
          localStorage.removeItem('name');
        },
        (err) => {
          console.log(err);
          alert(err);
        }
      );
    } else {
      this.studentService.logoutStudent().subscribe(
        (res) => {
          console.log(res);
          alert(res);
          localStorage.removeItem('Authorization');
          localStorage.removeItem('id');
          localStorage.removeItem('role');
          localStorage.removeItem('name');
        },
        (err) => {
          console.log(err);
          alert(err);
        }
      );
    }
  }
}
