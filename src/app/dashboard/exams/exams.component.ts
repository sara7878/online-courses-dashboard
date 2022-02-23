import { Component, OnInit } from '@angular/core';
import { Exam } from '../../_models/exam.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  constructor() { }
  ExamArray:Exam[]=[
    {Id:1,course_id:{name:"web development",id:1},max_score:10}
  ]

  ngOnInit(): void {
  }

  
}
