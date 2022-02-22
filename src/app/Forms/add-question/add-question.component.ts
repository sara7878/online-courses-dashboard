import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/_models/question.model';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  data: Question={
    header: "",
    choice_1: '',
    choice_2: '' ,
    choice_3: '' ,
    choice_4: '' ,
    answer: '' ,
    score:0,
};

  constructor(private QuestionService: QuestionService ,private router: Router) { }

  ngOnInit(): void {
  }

  addQuestion(form: NgForm) {
    
    this.data.header = form.value['header'];
    this.data.choice_1 = form.value['choice_1'];
    this.data.choice_2 = form.value['choice_2'];
    this.data.choice_3 = form.value['choice_3'];
    this.data.choice_4 = form.value['choice_4'];
    this.data.answer = form.value['answer'];
    this.data.score = form.value['score'];
    

    this.QuestionService.CreateQestion(this.data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error adding question');
      }
    );
  }



  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }

  resetForm(form: NgForm) {
    form.reset();
  }

 



}




