import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { CategororyService } from 'src/app/_services/categorory.service';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/post.model';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private categoryservice: CategororyService
  ) {}

  ff = new FormData();
  data: Category = { name: 'sara', img: this.ff };

  // data:Post={image:null};

  // onsubmit(form: NgForm) {
  //   // console.log(form);
  //   // console.log(form.value);
  //   // this.data.name = form.value['catName'];
  //   // this.data.img = form.value['catImage'];
  //   // console.log(this.data.name);
  //   // console.log(this.data.img);

  // }

  resetForm(form: NgForm) {
    form.reset();
  }

  files: any;
  submitted = false;
  form!: FormGroup;

  creatForm() {
    this.form = this.formbuilder.group({
      catname: [null, Validators.required],
      image: [null, Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.creatForm();
  }
  uploadImage(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);
  }

  // addcategory(form: NgForm) {
  //   this.data.name = form.value['catName'];
  //   this.data.img = this.data["img"];
  //   console.log(this.data.name);

  //   this.categoryservice.addcategory(this.data).subscribe(
  //     (res) => {
  //       console.log(res.data);
  //     },
  //     (err) => {
  //       console.log('Error adding category');
  //     }
  //   );
  // }
  onsubmit(form: any) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    //  console.log(form.value);
    const formdata = new FormData();
    formdata.append('image', this.files, this.files.name);
    console.log(formdata);
    formdata.append('name', form.value.catname);
    const name = form.value.catname;
    this.data.name = form.value.catname;
    this.data.img = formdata;
    console.log(this.data);

    this.categoryservice.addcategory(formdata).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error adding category');
      }
    );
  }
}
