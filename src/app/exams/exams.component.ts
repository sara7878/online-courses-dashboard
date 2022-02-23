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
   ExamArr =[{id:11,name:"edf", course_id:1, max_score:8, course:{id:1, name:"coursename"}}]
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




    deleteExam(id:number){
      console.log(id)
      this.examService.deleteExam(id).subscribe(
        (res) => {
          // this.coursesContentsArr = res;
          console.log(res);

        },
        (err) => {
          console.log('Error deleting exam');
        }
      );
        }
}
