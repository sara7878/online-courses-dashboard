import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from '../../_models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private studentservice:StudentService ) {}

  StudentsArray:Student[]=[]




  
  ngOnInit(): void {
    this.getAllstudents();
  }

  getAllstudents() {
    this.studentservice.getAllStudents().subscribe(
      (res) => {
        this.StudentsArray = res.data;
        console.log(this.StudentsArray);
      },
      (err) => {
        console.log('error in get students');
      }
    );}
    
 deleteStudent(id:number){
      this.studentservice.deleteStudentById(id).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log('Error deleting student');
        }
      );
    }



}