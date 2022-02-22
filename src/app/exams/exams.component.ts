import { Component, OnInit } from '@angular/core';
import { Exam } from '../_models/exam.model';
import { ExamsService } from '../_services/exams.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  constructor(private examService : ExamsService) { }
  ExamArray!:Exam[]
   
  ngOnInit(): void {
    this.getAllExams();
 
  }

  getAllExams(){
    this.examService.getAllExams().subscribe(
      (res)=>{
        this.ExamArray=res.data;
        console.log(res);
        
      },
      (err)=>{
        console.log(err);
      },
      ()=>{}
    );}
}
