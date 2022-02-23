import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/_models/exam.model';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ExamArray:Exam[]=[{Id:1,name:"html",course_id:{id:1,name:"html"}, max_score:50},
  {Id:1,name:"css",course_id:{id:1,name:"css"}, max_score:80},
  {Id:1,name:"js",course_id:{id:1,name:"js"}, max_score:100}

]
}
