import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  firstName: string = 'Khaja';
  lastName: string = 'Moizuddin';
  EmployeeFullName: string = this.firstName + this.lastName;
  value1: number = 100;
  value2: number = 200;
  total: number;
  webURL: string = 'https://www.c-sharpcorner.com';
  imageURL: string = 'https://avatars2.githubusercontent.com/u/20270535?s=40&v=4';
  myImageURL: string = 'assets/Images/mvp1.jpg';
  ondoubleClick: string;
  onButtonClick: string;
  FullName: string = this.firstName + this.lastName;
  employeeFullName() {
   return this.EmployeeFullName = this.firstName + this.lastName;
  }

  getTotal() {
   return this.total = this.value1 + this.value2;
  }

  onbtnClick() {
    return this.onButtonClick =  this.EmployeeFullName;
  }

  onDoubleClick() {
     return this.ondoubleClick = this.EmployeeFullName;
  }

constructor() { }

  ngOnInit() {
  }

}
