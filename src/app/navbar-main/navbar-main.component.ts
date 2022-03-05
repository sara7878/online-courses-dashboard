import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.checktoken();
  }

 token =false;

 checktoken()
 {
 
 if(localStorage.getItem("Authorization") === null)
 {
   this.token=true;
 }
else {
  this.token=false;
}
 }


}
