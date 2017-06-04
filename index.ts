import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeComponent } from './lib/angular-font-awesome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    AngularFontAwesomeComponent
  ],
  exports: [
    AngularFontAwesomeComponent
  ]
})
export class AngularFontAwesomeModule { }

export * from './lib/angular-font-awesome.component';
