import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

name:string=localStorage.getItem('name')!;
  constructor() { }
  userName:string=localStorage.getItem('name')!;

  ngOnInit(): void {
  }

}
