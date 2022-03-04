import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseContentService: CourseContentService,
    private sanitizer: DomSanitizer
  ) {}
  urlArr:string[]=[""];
  contentArr!:CourseContent[];
  url1:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['courseId'];
      console.log(params);
      if (id) {
         this.getCourseContent(id);
      }
       
    });
  }
  

 url:any;
 urlSecuredArr:any[] =[];

  getCourseContent(id: number) {
    this.courseContentService.getContentofspacificCourse(id).subscribe(
      (res) => {
        this.contentArr = res;
        for (let index = 0; index < this.contentArr.length; index++) {
          this.urlArr[index]= this.contentArr[index].content!;
          this.url=this.sanitizer.bypassSecurityTrustResourceUrl(this.urlArr[index]);
          this.urlSecuredArr[index]=this.sanitizer.bypassSecurityTrustResourceUrl(this.urlArr[index]);
        }
      },
      (err) => {
        console.log('Error adding course content');
        console.log(err);
      }
    );
  }



}

