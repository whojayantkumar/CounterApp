import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  interval:any;
//   startCounter(){ 
//     this.interval = setInterval(()=>{
//     this.counter ++;
//   },1000)
// }
 startCounter = ()=>{
   this.interval = setInterval(()=>{
     this.counter ++;
   },1000)
 }
  pauseCounter = ()=>{
    clearInterval(this.interval);
  }
  resetCounter = ()=>{
    this.counter = 0;
  }
}
