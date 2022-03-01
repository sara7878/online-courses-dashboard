import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm,FormGroup,Validators } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { CategororyService } from 'src/app/_services/categorory.service';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/post.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private http: HttpClient,private formbuilder:FormBuilder,private categoryservice:CategororyService,) { }

  ff=new FormData();
  data:Category={name:"sara",img:this.ff};



  resetForm(form: NgForm) {
    form.reset();
  }

  files:any;
  submitted=false;
  form!:FormGroup;

  creatForm(){
    this.form=this.formbuilder.group({
      catname:[null,Validators.required],
      image:[null,Validators.required]
    })
  }

  get f(){
    return this.form.controls;

  } 
   ngOnInit(): void {
    this.creatForm();
  }
  uploadImage(event:any){
    this.files=event.target.files[0]
    console.log(this.files);
    
  }

  onsubmit(form:any){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    //console.log(form.value);
    const formdata=new FormData();
    formdata.append("image",this.files,this.files.name);

    console.log(formdata);



    formdata.append("name",form.value.catname);


    //const name=form.value.catname;
    this.data.name=form.value.catname;
    this.data.img=formdata;






    console.log(this.data);

    


    this.categoryservice.addcategory(formdata).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) => {
        console.log('Error adding category');
      }
    );
   }



}
