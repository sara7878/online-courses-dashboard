import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }
  QuetionArray:Question[]=[
    {id:1,header:"how old jh?",choice_1:"1",choice_2:"2",choice_3:"3",choice_4:"4",answer:"1",score:10}
  ]
  ngOnInit(): void {
  }

}
