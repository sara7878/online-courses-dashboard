import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category.model';
import { CategororyService } from '../_services/categorory.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService:CategororyService) { }

  CategoryArray:Category[]=[{Id:1,img:"../../assets/images/faces-clipart/pic-1.png",name:"web development",created_at:"19/3",updated_at:"2147"},{Id:2,img:"../../assets/images/faces-clipart/pic-1.png",name:"design development",created_at:"19/3",updated_at:"2147"}];
  catarray!:Category[];
  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.categoryService.getcategories().subscribe(
      (res)=>{
        this.catarray=res;
      },
      (err)=>{
        console.log(err);
      },
      ()=>{}
    );}
}
