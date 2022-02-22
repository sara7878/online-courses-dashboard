import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/_models/question.model';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    QuestionArr:Question[]=[{id:1,header:"header header",choice_1:"choice choice 1  ",choice_2:"choice 2",choice_3:"choice 1",choice_4:"choice 4",answer:"answer ",score:10,}]
}
