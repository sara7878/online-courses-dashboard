import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course.model';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.css']
})
export class CoursesDetailsPageComponent implements OnInit {

coursedetails: Course={
    id: 1,
    name: "design development",
    img: "umd.png",
    price: 200,
    duration: 43,
    preq: "ferb jkdnejk dfvjnl",
    desc: "dfvhbkjf fdcnhfv fdncjvn",
    trainer_id: 4,
    category_id: 1,
    category: {
        id: 1,
        name: "web",
        img: "testimg.jpg",
    },
    trainer: {
        id: 4,
        fname: "sara",
        lname: "sara",
        gender: "female",
        phone: "52748349",
        img: "img.png",
        email: "sara@gmain.com",
        pass: "53478",
        facebook: "asdgh",
        twitter: "dscnjksd",
        linkedin: "sdcbks",
    }};

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['courseId'];
      console.log(params);
      if (id) {
        this.getCoursedetails(id);
        // console.log(this.coursedetails);
      }
    });
  }



  getCoursedetails(id: number) {
    this.courseService.getCourseById(id).subscribe(
      (res) => {
        this.coursedetails = res;
        console.log(res);
      },
      (err) => {
        console.log('Error getting course details');
      }
    );
  }


  }
  // constructor(
  //   private CourseContentService: CourseContentService,
  //   private activatedRoute: ActivatedRoute,
  //   private courseService: CoursesService
  // ) {}

  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe((params) => {
  //     const id = params['id'];
  //     if(id) {
  //       this.getCourse(id);
  //     }
  //   });  
  // }
  
  // coursedetails: Course={
  //   id: 1,
  //   name: "design development",
  //   img: "umd.png",
  //   price: 200,
  //   duration: 43,
  //   preq: "ferb jkdnejk dfvjnl",
  //   desc: "dfvhbkjf fdcnhfv fdncjvn",
  //   trainer_id: 4,
  //   category_id: 1,
  //   category: {
  //       id: 1,
  //       name: "web",
  //       img: "testimg.jpg",
  //   },
  //   trainer: {
  //       id: 4,
  //       fname: "sara",
  //       lname: "sara",
  //       gender: "female",
  //       phone: "52748349",
  //       img: "img.png",
  //       email: "sara@gmain.com",
  //       pass: "53478",
  //       facebook: "asdgh",
  //       twitter: "dscnjksd",
  //       linkedin: "sdcbks",
  //   }};


  // getCourse(id: number) {
  //   this.courseService.getCourseById(id).subscribe(
  //     (res) => {
  //       this.coursedetails = res;
  //        console.log(res);

  //     },
  //     (err) => {
  //       console.log('Error getting course');
  //     }
  //   );
  // }
  



// }
