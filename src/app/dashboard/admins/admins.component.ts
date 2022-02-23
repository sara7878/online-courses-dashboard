import { Component, OnInit } from '@angular/core';
import { Admin } from '../../_models/admin.model';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor() { }

AdminsArray:Admin[]=[
  {id:1,fname:"sara",last_name:"mohamed",img:"",email:"xdgh@hgsd.com",pass:"2145"}
]

  ngOnInit(): void {
  }

}
