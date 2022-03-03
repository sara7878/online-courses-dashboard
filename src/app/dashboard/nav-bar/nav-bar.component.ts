import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
  }


logout(){
  this.adminservice.Adminlogout().subscribe(
  (res)=>{
  console.log(res)
  },
  (error)=>{
  console.log("can't logout");
  console.log(error);
  }
  )
  localStorage.removeItem('Authorization')
}
}
