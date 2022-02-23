import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
   //this is a variable that hold number
   counter1:number = 0;
   counter2:number = 0;
   counter3:number = 0;
   counter4:number = 0;
 

   projectcountstop1 = setInterval(()=>{
     this.counter1++;
   if(this.counter1 == 232){
     clearInterval(this.projectcountstop1);
  }
   },8);
    
   projectcountstop2 = setInterval(()=>{
     this.counter2++;
   if(this.counter2 == 521){
     clearInterval(this.projectcountstop2);
  }
   },8);

   projectcountstop3 = setInterval(()=>{
     this.counter3++;
   if(this.counter3 == 1463){
     clearInterval(this.projectcountstop3);
  }
   },8);

   projectcountstop4 = setInterval(()=>{
     this.counter4++;
   if(this.counter4 == 15){
     clearInterval(this.projectcountstop4);
  }
   },8);

}
