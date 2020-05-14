import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {
  firstName:string = 'Khaja';
  lastName: string = 'Moizuddin';
  fullName:string= this.firstName + this.lastName;
  value1: number = 350;
  value2:number = 550;
  totalValue: number = this.value1 + this.value2;
  getFullNames: string;
  getFullNamesVal: string;
  getTotalValue: number;

  getFullName1() {
    return this.firstName + this.lastName;
  }

  getFullName2() {
    return this.fullName;
  }

  getFullName3() {
    this.getFullNames = this.fullName;
  }

  getFullName4() {
 return this.getFullNamesVal = this.firstName + this.lastName;
  }

  getTotalValue1() {
    return this.value1 + this.value2;
  }

  getTotalValue2() {
    return this.totalValue;
  }

  getTotalValue3() {
    return this.getTotalValue = this.value1 + this.value2;
  }

  getTotalValue4() {
 return this.getTotalValue = this.totalValue;
  }




  constructor() { }

  ngOnInit() {
  }

}
