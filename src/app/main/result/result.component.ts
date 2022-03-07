import { Component, OnInit } from '@angular/core';
import { ExamResultService, result } from 'src/app/_services/exam-result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private resultService:ExamResultService) { }
result:result={
student_id:0,
exam_id:0,

}
newresult:result={
  student_id:0,
  exam_id:0,
  degree:0
  }

  ngOnInit(): void {
this.getresult();
  }

 

  getresult() {
    
    this.result.student_id=parseInt(localStorage.getItem("id")!)
    this.result.exam_id=parseInt(localStorage.getItem("exam_id")!)
console.log(this.result)

    this.resultService.getresult(this.result).subscribe(
      (res) => {
        this.newresult=res;
        console.log(this.newresult);

      },

      (err) => {
        console.log('cant load data from exam question');
        console.log(err);
      }
    );
   
  }
}
