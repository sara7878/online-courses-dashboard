import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { CategororyService } from 'src/app/_services/categorory.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryservice:CategororyService) { }

  data:Category={name:"",img:""};
  ngOnInit(): void {
  }

  addcategory(form: NgForm) {
    this.data.name = form.value['catName'];
    // this.data.img = form.value['catImage'];
    // console.log(this.data.name);
    // console.log(this.data.img);
    
    this.categoryservice.addcategory(this.data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error adding category');
      }
    );
  }

  onsubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    this.data.name = form.value['catName'];
    // this.data.img = form.value['catImage'];
    // console.log(this.data.name);
    // console.log(this.data.img);
    
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
