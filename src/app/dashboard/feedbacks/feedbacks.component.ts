import { Component, OnInit } from '@angular/core';

import { Feedback } from '../../_models/feedback.model';
import { FeedbackService } from '../../_services/feedback.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor( private feedbackService: FeedbackService) { }
  // FeedbackArray:Feedback[]=[
  //   {id:1,desc:"sgjvash asxbksjhbx",student_id:{fname:"sara"},course_id:{name:"web development",id:1}}
  // ]
  feed!:Feedback[]

  ngOnInit(): void {
    this.getAllfeedbacks();
  }



  getAllfeedbacks() {
    this.feedbackService.getAllfeedbacks().subscribe(
      (res) => {
        this.feed = res;
        console.log(this.feed);
      },
      (err) => {
        console.log('Error in get all feeds');
      }
    );
  }


}
