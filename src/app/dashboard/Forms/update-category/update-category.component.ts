import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { CategororyService } from 'src/app/_services/categorory.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private http: HttpClient,private formbuilder:FormBuilder,private categoryservice:CategororyService,private activatedRoute: ActivatedRoute) { }
  
  cat:Category={id: 2, name: 'category', img: 'cate -6214efae12666.jpg'};
  ff=new FormData();
  files:any;
  submitted=false;
  form!:FormGroup;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      // console.log(params);
      if (id) {
        this.getcategory(id); 
        // console.log(this.cat.name);
      }
    });
    // this.cat=this
    this.creatForm();
    this.form.patchValue({catname: this.cat.name});

  }

  getcategory(id: number) {
    this.categoryservice.getCategorybyId(id).subscribe(
      (res) => {
        this.cat= res.data;
        console.log(this.cat); 

      },
      (err) => {
        console.log('Error getting category');
      }
    );
  }

  // resetForm(form: NgForm) {
  //   form.reset();
  // }

  creatForm(){
    this.form=this.formbuilder.group({
      catname:[null,Validators.required],
      image:[null,Validators.required]
    })

  }



  get f(){
    return this.form.controls;

  } 

  uploadImage(event:any){
    this.files=event.target.files[0]
    console.log(this.files);
    
  }


  onsubmit(id:any,form:any){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    //console.log(form.value);
    const formdata=new FormData();
    formdata.append("image",this.files,this.files.name);
    formdata.append("name",form.value.catname);

    this.categoryservice.updatecategory(id,formdata).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) => {
        console.log('Error updating category');
      }
    );
   }



  category: Category = {
    name: '',
  };

  updatedCategory: Category = {
    name: '',
  };

  getCategoryById(id: number) {
    this.categoryservice.getCategorybyId(id).subscribe(
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
    this.categoryservice.editCategory(id,this.updatedCategory).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error updating course content');
      }
    );
  }
}
