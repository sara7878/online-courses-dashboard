import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseContent } from 'src/app/_models/course_content.model';
import { CourseContentService } from 'src/app/_services/course-content.service';
import { ExamResultService } from 'src/app/_services/exam-result.service';
import { result } from 'src/app/_services/exam-result.service';
import { QuestionService } from 'src/app/_services/question.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseContentService: CourseContentService,
    private resultService: ExamResultService,
    private sanitizer: DomSanitizer,
    private question: QuestionService,
  ) {}
  urlArr:string[]=[""];
  contentArr!:CourseContent[];
  url1:any;
   id!:number;
   result:result={
    student_id:0,
    exam_id:0,
    
    }
    newresult:result={
      student_id:0,
      exam_id:0,
      degree:0
      }
     examQuestion!: any;

   active:boolean=false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['courseId'];
      console.log(params);
      if (this.id) {
         this.getCourseContent(this.id);
      }
       
    });
  
    //this.getAllexamQuestions()
    this.getresult();
    
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


  getresult() {
    
    this.result.student_id=parseInt(localStorage.getItem("id")!)
    this.result.exam_id=parseInt(localStorage.getItem("exam_id")!)
console.log(this.result)

    this.resultService.getresult(this.result).subscribe(
      (res) => {
        console.log(res)
      
      this.newresult=res;
      if(Object.keys(res).length===0)
      {this.active=false;}

      else 
      {this.active=true}
      
      },

      (err) => {
        console.log('student result not found');
        
      }
    );
   console.log(this.active);
  }



  // getAllexamQuestions() {
  //   this.question.getexamQuestions(this.id).subscribe(
  //     (res) => {
  //       this.examQuestion = res.data;
  //       console.log(this.examQuestion);
  //       localStorage.setItem('exam_id', this.examQuestion[0].exam_id);

 

  //     },
  //     (err) => {
  //       console.log('cant load data from exam question');
  //       console.log(err);
  //     }
  //   );
  // }

 

}

