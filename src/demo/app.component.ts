import { Component } from '@angular/core';

@Component({
  selector: 'yal-demo',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  something = 'Hello world!';

  log(message: any): void {
    console.log(message);
  }
}
