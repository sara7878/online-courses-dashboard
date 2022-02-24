import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  ngOnInit(): void {
  }

  imageSrc: string = '';
   
  /*------------------------------------------
  --------------------------------------------
  Declare form
  --------------------------------------------
  --------------------------------------------*/
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
   
  /*------------------------------------------
  --------------------------------------------
  created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private http: HttpClient) { }
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.myForm.controls;
  }
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event:any) {
    const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
    
        this.imageSrc = reader.result as string;
      
        this.myForm.patchValue({
          fileSource: reader.result
        });
    
      };
    
    }
  }
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.myForm.value);
    this.http.post('http://localhost:8002/upload.php', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }


}
