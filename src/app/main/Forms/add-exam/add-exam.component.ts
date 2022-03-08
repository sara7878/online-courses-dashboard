import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/_models/exam.model';
import { ExamsService } from 'src/app/_services/exams.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  constructor(private examService: ExamsService,private activatedRoute: ActivatedRoute) { }
  newexam: Exam={
    id: 0,
    course_id: 0,
    name: '',
    max_score: 0,
   
  };
  id:number=0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params);
      
    });
  }
  addExam(form: NgForm) {
    this.newexam.name = form.value['examName'];
    this.newexam.course_id= this.id;
    this.newexam.max_score = form.value['max_score'];
    // console.log(this.newContent);


    this.examService.addExam(this.newexam).subscribe(
      (res) => {
        // this.coursesContentsArr = res;
        console.log(res);
      },
      (err) => {
        console.log('Error adding course content');
        console.log(err);
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
