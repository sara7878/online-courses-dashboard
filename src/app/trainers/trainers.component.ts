import { Component, OnInit } from '@angular/core';
import { Trainer } from '../_models/trainer.model';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  TrainersArray:Trainer[]=[
    {id:1,fname:"sara",lname:"mohamed",phone:"123446",img:"../../assets/images/faces-clipart/pic-1.png",
  email:"sara.mahamed7878@gmail.com"},    
  {id:2,fname:"salma",lname:"mohamed",phone:"276489",img:"../../assets/images/faces-clipart/pic-1.png",
  email:"salma.mahamed7878@gmail.com"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
