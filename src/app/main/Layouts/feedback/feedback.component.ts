import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/_services/feedback.service';
import { SwiperOptions } from 'swiper';
import { Feedback } from 'src/app/_models/feedback.model';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  feed!:Feedback[]

  ngOnInit(): void {
    this.getAllfeedbacks();
  }

///main

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

  //swiper
  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 30
  };  
  



}
