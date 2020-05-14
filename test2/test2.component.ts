import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  firstName:string = 'Khaja';
  lastName:string = 'Moizuddin';
  fullName:string = this.firstName + this.lastName  ;
  number1:number = 150;
 number2:number = 450;
 totalValue:number = this.number1 + this.number2;
 getEmpFullName:string;
 getTotalAmount:number;
 weblinkURL:string  = 'https://www.c-sharpcorner.com/';
 myImagePath:string = 'assets/Images/mvp1.jpg';
 onbuttoncliickFName: string;
 ondoubleclickFName: string;


 getEmployeeFullName() {
   return this.getEmpFullName = this.fullName;
 }

 getTotalAmt() {
   return this.getTotalAmount = this.totalValue;
 }

 onbuttonclick() {
   return  this.onbuttoncliickFName = 'Welcome ' + this.fullName;
 }

 ondoubleclick() {
 return this.ondoubleclickFName = 'Welcome ' + this.fullName;
 }

  constructor() { }

  ngOnInit() {
  }
}
