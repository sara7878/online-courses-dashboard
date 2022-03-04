import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionService } from 'src/app/_services/question.service';
import { Question } from '../../../_models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private QuestionService: QuestionService ,private router: Router) { }

  QuetionArray!: Question[];
  Quetion!: Question;
  p: number = 1;

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


  getone(id:number) {
    this.QuestionService.getoneQestion(id).subscribe(
      (res) => {
        this.Quetion = res.data;
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => { }
    );
  }

  deleteQestion(id:number){
    this.QuestionService.deleteQestion(id).subscribe(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log('Error deleting deleteQestion ');
      }
    );
      }


}



