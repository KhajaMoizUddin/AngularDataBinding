import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
value1:string = 'KhajaMoizuddin';
value2:string = 'KhajaMoizuddin';
webLink:string = 'https:www.c-sharpcorner.com';
information:string = '';
doubleclicked:string = '';
onsubmit:string = '';
imageLink:string = 'https://avatars2.githubusercontent.com/u/20270535?s=40&v=4';

onclickButton() {
this.information = 'Button clicked';
}


ondoubeClick() {
  this.doubleclicked = 'Double Clicked Performed';
}

onsubmitclicked() {
  this.onsubmit = 'Submit button clicked';

}
}
