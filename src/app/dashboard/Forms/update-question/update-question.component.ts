import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/_models/question.model';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {




  constructor(private QuestionService: QuestionService,
    private activatedRoute: ActivatedRoute) { }
  // id!:number;
  // data !:Question [];

  Question:Question = {
    header: "",
    choice_1: '',
    choice_2: '' ,
    choice_3: '' ,
    choice_4: '' ,
    answer: '' ,
    score:0,
  };
  updatedQuestion: Question = {
    header: "",
    choice_1: '',
    choice_2: '' ,
    choice_3: '' ,
    choice_4: '' ,
    answer: '' ,
    score:0,
  };


  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log(params);
      if (id) {
        this.getQuestion(id);
        console.log(this.Question);
      }

    });


  }


getQuestion(id: number) {
    this.QuestionService.getoneQestion(id).subscribe(
      (res) => {
        this.Question=res.data ;
        console.log(res.data);
      },
      (err) => {
        console.log('Error adding course content');
        console.log(err);
      }
    );
  }



  updateQuestion(id: number,form:NgForm) {
    this.updatedQuestion.header = form.value['header'];
    this.updatedQuestion.choice_1 = form.value['choice_1'];
    this.updatedQuestion.choice_2 = form.value['choice_2'];
    this.updatedQuestion.choice_3 = form.value['choice_3'];
    this.updatedQuestion.choice_4 = form.value['choice_4'];
    this.updatedQuestion.answer = form.value['answer'];
    this.updatedQuestion.score = form.value['score'];

    this.QuestionService.editQestion(id,this.updatedQuestion).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
      },
      (err) => {
        console.log('Error updating Qestion ');
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}





