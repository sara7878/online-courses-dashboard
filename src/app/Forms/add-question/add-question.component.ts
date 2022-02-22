import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/_models/question.model';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  data = [] as Question;
  // data !:Question ;
  // QuetionArray!: Question[];
  constructor(private QuestionService: QuestionService ,private router: Router) { }

  ngOnInit(): void {
  }

  saveQuestion(){
    this.QuestionService.CreateQestion(this.data).subscribe( data =>{
      console.log(data);
      this.goToQuestionList();
    },
    error => console.log(error));
  }

  goToQuestionList(){
    this.router.navigate(['/questions']);
  }
  
  onSubmit(form:any): void{
    console.log(this.data);
    this.saveQuestion();
    console.log(form.value);
    
  }

}




