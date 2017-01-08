import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { Angular2FontAwesomeComponent } from './lib/angular2-font-awesome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    Angular2FontAwesomeComponent
  ],
  exports: [
    Angular2FontAwesomeComponent
  ]
})
export class Angular2FontAwesomeModule { }

export * from './lib/angular2-font-awesome.component';
