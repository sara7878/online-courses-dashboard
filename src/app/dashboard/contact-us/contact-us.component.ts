import { Component, OnInit } from '@angular/core';

import { Contactus } from '../../_models/contactus.model';
import { ContactUsService } from '../../_services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  p: number = 1;

  constructor(private contactUS: ContactUsService) { }

  ContactusArray!:Contactus[]

  newcontact!:Contactus

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

//  saveContact(): void {
//   const data = {
//     name: this.newcontact.name,
//     email:this.newcontact.email,
//   subject:this.newcontact.subject,
//   message:this.newcontact.message,
//   };


//   this.contactUS.create(data)
//   .subscribe(
//     response => {
//       console.log(response);


 deleteContactus(id:number){
  this.contactUS.deleteContact(id).subscribe(
    (res) => {
      // this.coursesContentsArr = res;
      console.log(res);
    },
    (err) => {
      console.log('Error deleting contact');
    }
  );
    }
  }



