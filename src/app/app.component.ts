import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class AppComponent {
  displayParagraph = false;
  logArray = [];
  counter = 0;
  color: string = 'none';

  onButtonClick() {
    this.displayParagraph = !this.displayParagraph; 
    this.counter++;
    // this.logArray.push(this.counter);
    this.logArray.push(new Date());
  }
}
