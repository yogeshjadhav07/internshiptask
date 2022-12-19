import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {
  public phonenumber:Array<Object> = [
];
phone:any;
id1:any=1;
id2:any;
isupdated=false;
isupdated1=true;

addphone(index1: any) {
  
  if (index1) {

    this.id1= this.phonenumber.length;
 this.id2=this.id1+1;
   this.phone= this.phonenumber.push("Phone number"+this.id2+":"+index1);
   console.log(this.phonenumber)
   this.isupdated=true;
   this.isupdated1=false;
   
  }
  
}
 


  constructor() { }

  ngOnInit(): void {
  }

}
