import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
// import { FontAwesomeDirective } from './src/font-awesome.directive';
import { Angular2FontAwesomeComponent } from './src/angular2-font-awesome.component';

export * from './src/angular2-font-awesome.component';
// export * from './src/font-awesome.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    // FontAwesomeDirective,
    Angular2FontAwesomeComponent
  ],
  exports: [
    // FontAwesomeDirective,
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
