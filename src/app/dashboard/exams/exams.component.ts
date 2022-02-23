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

    
  ]

  ngOnInit(): void {
  }


}
