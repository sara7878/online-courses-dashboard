import { Component, Input, OnInit } from '@angular/core';
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
  // @Input()
  userName:string=localStorage.getItem('name')!;

  // @Input()
  // userName:any;

  ngOnInit(): void {
    this.checktoken();
    if (localStorage.getItem('role') == 'isTrainer') this.checkUser = 'trainer';
    else this.checkUser = 'student';

    this.studentService.studentloginservice.subscribe(
      (next)=>{
        console.log(next);     
        this.userName=next.name; 
      },
      (error)=>{
        console.log("error in showing items in basket")
      },
      ()=>{}
      
    );

    this.trainserService.trainerloginservice.subscribe(
      (next)=>{
        console.log(next);     
        this.userName=next.name; 
      },
      (error)=>{
        console.log("error in showing items in basket")
      },
      ()=>{});
  }


  token = false;



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
          // alert(res);
          localStorage.removeItem('Authorization');
          localStorage.removeItem('id');
          localStorage.removeItem('role');
          localStorage.removeItem('name');

          this.trainserService.trainerloginservice.emit("null")

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
          // alert(res);
          localStorage.removeItem('Authorization');
          localStorage.removeItem('id');
          localStorage.removeItem('role');
          localStorage.removeItem('name');

          this.studentService.studentloginservice.emit("null")

        },
        (err) => {
          console.log(err);
          alert(err);
        }
      );
    }
  }



}
