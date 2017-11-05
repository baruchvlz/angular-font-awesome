import { Component } from '@angular/core';
import { AngularFontAwesomeService } from 'angular-font-awesome';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  meaning: number;
  constructor(AngularFontAwesomeService: AngularFontAwesomeService) {
    this.meaning = AngularFontAwesomeService.getMeaning();
  }
}
