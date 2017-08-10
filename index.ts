import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeComponent } from './lib/angular-font-awesome.component';
import { AngularFontAwesomeStackedComponent } from './lib/angular-font-awesome-stacked/angular-font-awesome-stacked.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    AngularFontAwesomeComponent,
    AngularFontAwesomeStackedComponent,
  ],
  exports: [
    AngularFontAwesomeComponent,
    AngularFontAwesomeStackedComponent,
  ]
})
export class AngularFontAwesomeModule { }

export * from './lib/angular-font-awesome.component';
