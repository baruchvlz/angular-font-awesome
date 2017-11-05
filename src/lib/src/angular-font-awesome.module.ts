import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeComponent } from './component/angular-font-awesome.component';
import { AngularFontAwesomeService } from './service/angular-font-awesome.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AngularFontAwesomeComponent],
  providers: [AngularFontAwesomeService],
  exports: [AngularFontAwesomeComponent]
})
export class AngularFontAwesomeModule { }
