import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback } from 'src/app/_models/feedback.model';
import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }
feed!: Feedback[]
  newfeedback: Feedback={
   
    id:0,
    // student:{fname:''},
    // course:{name:''},
    desc:'',
    course_id:0,
    student_id:0
   
  };
  //recieved= false;
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
        console.log('cant load data');
      }
    );
  }








  addFeedback(form: NgForm) {
    this.newfeedback.name = form.value['name'];
    this.newfeedback.student_id= form.value['student_id'];
    this.newfeedback.course_id = form.value['course_id'];
    this.newfeedback.desc = form.value['desc'];

    // console.log(this.newContent);
// ['name'];
//  ['student_id'];
// ['course_id'];
//   ['desc']

    this.feedbackService.addFeeback(this.newfeedback).subscribe(
      (res) => {
        // this.coursesContentsArr = res;
        console.log(res);
      },
      (err) => {
        console.log('Error adding contact');
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
