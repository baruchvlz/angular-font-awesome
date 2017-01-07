import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';

import { Angular2FontAwesomeComponent } from './src/angular2-font-awesome.component';

export * from './src/angular2-font-awesome.component';


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
export class Angular2FontAwesomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Angular2FontAwesomeModule,
      providers: []
    }
  }
}
