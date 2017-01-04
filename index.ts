import { NgModule, ModuleWithProviders } from "@angular/core";
import { FontAwesomeDirective } from './src/font-awesome.directive';
import { FontAwesomeComponent } from './src/font-awesome.component';

export * from './src/font-awesome.component';
export * from './src/font-awesome.directive';

@NgModule({
  declarations:[
    FontAwesomeDirective,
    FontAwesomeComponent
  ],
  exports: [
    FontAwesomeDirective,
    FontAwesomeComponent
  ]
})
export class FontAwesomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FontAwesomeModule,
      providers: []
    }
  }
}
