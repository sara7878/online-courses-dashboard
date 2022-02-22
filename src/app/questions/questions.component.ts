import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../_models/question.model';
import { QuestionService } from '../_services/question.service';


// QuetionArray$!:Observable<{question: Question[]}>;
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private QuestionService: QuestionService) { }

  QuetionArray!: Question[];
  
  ngOnInit(): void {

    this.getAll();

  }
  getAll() {
    this.QuestionService.getAllQuestion().subscribe(
      (res) => {
        this.QuetionArray = res.data;
        console.log(res);

      },
      (err) => {
        console.log(err);
      },
      () => { }
    );
  }
}




