import { Component, OnInit } from '@angular/core';
import { Contactus } from '../../_models/contactus.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ContactusArray:Contactus[]=[
    {id:1,email:"hbmn",name:"dfg",subject:"njnk",message:"hbkj"}

  ]
  ngOnInit(): void {
  }

}
