import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
