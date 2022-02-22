import { Component, OnInit } from '@angular/core';
import { Contactus } from '../_models/contactus.model';
import { ContactUsService } from '../_services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactUS: ContactUsService) { }

  ContactusArray!:Contactus[]
   

  
  ngOnInit(): void {
    this.getAllcontacts();
  }





  getAllcontacts()
 {
  this.contactUS.getAllContacs().subscribe(
    (res)=>{
      this.ContactusArray=res;
      console.log(this.ContactusArray)}, 
      (err)=>{
        console.log("cant load data from contact us")
      }

  )

 }
}
