import { Component, OnInit } from '@angular/core';
import { Feedback } from '../_models/feedback.model';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor() { }
  FeedbackArray:Feedback[]=[
    {id:1,desc:"sgjvash asxbksjhbx",student_id:{fname:"sara"},course_id:{name:"web development"}}
  ]

  ngOnInit(): void {
  }

}
