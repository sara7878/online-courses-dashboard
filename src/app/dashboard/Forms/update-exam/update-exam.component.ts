import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/_models/exam.model';
import { ExamsService } from 'src/app/_services/exams.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})

export class UpdateExamComponent implements OnInit {
  ExamArray!:Exam[];

  examContent: Exam = {
    course_id: 0,
    max_score: 0,
    name: '',
  };

  updatedExam: Exam = {
    course_id: 0,
    max_score: 0,
    name: '',
  };

  constructor(   private examService: ExamsService,
    private activatedRoute: ActivatedRoute) { }


    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        const id = params['id'];
        console.log(params);
        if (id) {
          this.getExams(id);
          console.log(this.examContent);
        }
      });
      this.getAllExams();
    }

    getAllExams(){
      this.examService.getAllExams().subscribe(
        res=>{
          this.ExamArray = res.data;
          console.log(res);
        },
        (err) => {
          console.log('Error getting exams');
        }
      )
    }


    getExams(id: number) {
      this.examService.getexam(id).subscribe(
        (res) => {
          this.examContent = res.data;
          console.log(res);
        },
        (err) => {
          console.log('Error getting exam');
        }
      );
    }

    updateExam(id: number,form:NgForm) {
      this.updatedExam.name = form.value['examName'];
      this.updatedExam.course_id = form.value['course_id'];
      this.updatedExam.max_score = form.value['max_score'];
      // console.log(this.newContent);
      this.examService.editExam(id,this.updatedExam).subscribe(
        (res) => {
          // this.coursesContentsArr = res;
          console.log(res);
        },
        (err) => {
          console.log('Error updating course content');
        }
      );
    }

    resetForm(form: NgForm) {
      form.reset();
    }






}



