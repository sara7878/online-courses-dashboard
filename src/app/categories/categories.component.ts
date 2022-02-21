import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  CategoryArray:Category[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"web development"},{Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"design development"}];
  ngOnInit(): void {
  }

}
