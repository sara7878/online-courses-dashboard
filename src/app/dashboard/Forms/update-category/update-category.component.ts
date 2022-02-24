import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { CategororyService } from 'src/app/_services/categorory.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  constructor(
    private categoryService: CategororyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      // console.log(params);
      if (id) {
        this.getCategoryById(id);
        console.log(this.category);
      }
    });
  }


  category: Category = {
    name: '',
  };

  updatedCategory: Category = {
    name: '',
  };

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(
      (res) => {
        this.category = res.data;
        console.log(this.category);
      },
      (err) => {
        console.log('Error adding category');
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  updateCategory(id: number, form: NgForm) {
    this.updatedCategory.name = form.value['catName'];
    
    console.log(this.updatedCategory);
    this.categoryService.editCategory(id,this.updatedCategory).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error updating course content');
      }
    );
  }
}
