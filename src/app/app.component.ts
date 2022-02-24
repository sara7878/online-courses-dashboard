import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Category } from './_models/category.model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'online-courses-dashboard';
  active: boolean=false;
  active1: boolean=false;

  url1:string="/dashboard";
  url2:string="/main";
  routeurl1!:string
  routeurl2!:string

  // CategoryArray:Category[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"web development"},{Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"design development"}];
  constructor(public router: Router) {

  this.router.events.subscribe(events => {
    if (events instanceof NavigationEnd) {
      this.routeurl1 = this.router.url.slice(0, 10)
      this.routeurl2 = this.router.url.slice(0, 5)

        if(this.url1==this.routeurl1){
        this.active=true
        this.active1=false
      }

        if(this.url2==this.routeurl2){
        this.active1=true
        this.active=false

      }


    }
  });
}

config: SwiperOptions = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 30
};

}
