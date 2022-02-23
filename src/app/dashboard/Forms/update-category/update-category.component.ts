import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.model';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CategoryArray!:Category[];
  // =[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"web development"},{Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"design development"}];

}
