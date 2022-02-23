import { Component, OnInit } from '@angular/core';
import { Category, Categoryobj } from '../../_models/category.model';
import { CategororyService } from '../../_services/categorory.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService:CategororyService) { }

  catarray!:Category[];
  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.categoryService.getcategories().subscribe(
      (res)=>{
        this.catarray=res.data;
        // console.log(res);
        
      },
      (err)=>{
        console.log(err);
      },
      ()=>{}
    );}
    
}
