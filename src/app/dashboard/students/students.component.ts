import { Component, OnInit } from '@angular/core';
import { Student } from '../../_models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  StudentsArray:Student[]=[
    {id:1,fname:"ahmed",lname:"yossef",phone:"235437",email:"asjhv@hbha.sdjk",img:"../../assets/images/faces-clipart/pic-1.png"},
    {id:2,fname:"mohamed",lname:"ahmed",phone:"4373478",email:"asjhv@dj@jhd.sdjk",img:"../../assets/images/faces-clipart/pic-1.png"},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
