import { NgModule, Component, OnInit } from '@angular/core';
// import { async, inject, TestBed } from '@angular/core/testing';
//
// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { Angular2FontAwesomeModule } from '../angular2-font-awesome';

@Component({
  selector: 'test-app',
  template: `
    <ng2-fa name="user"></ng2-fa>
  `
})
export class TestAppComponent implements OnInit {
  constructor() { }
  ngOnInit () { }
}

@NgModule({
  imports: [
    Angular2FontAwesomeModule
  ],
  declarations: [
    TestAppComponent
  ]
})
export class TestAppModule { }


describe('Angular 2 Font Awesome', () => {
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ TestAppComponent ]
  //   })
  //   .compileComponents();
  //   fixture = TestBed.createComponent(TestAppComponent);
  //   component = fixture.componentInstance();
  //   fixture.detectChanges();
  // }));
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should throw error if no name is passed', () => { });
  console.log('test');

});
