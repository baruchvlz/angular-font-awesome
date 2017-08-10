import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa-stacked, ng2-fa-stacked, ng4-fa-stacked, ng-fa-stacked',
  template: `<span *ngIf="options" ngClass="wrapperClasses">
    <fa [name]="icon.name" *ngFor="icon in data.icons" [ngClass]="icon.name"></fa>
  </span>`,
})
export class AngularFontAwesomeStackedComponent implements OnInit {
  @Input('options') options: { wrapper: { classes: Array<string> }, icons: Array<any>, text: string };

  private _wrapperClasses: Array<string> = this.options.wrapper.classes;
  // private _iconClasses: Array<any>;

  constructor() {
    if (!this.options) return;
  }

  ngOnInit() {

    this.options.wrapper = { classes: ['fa-lg'] };

    this.options.icons = [
      { name: 'square-o', classes: [''] },
      { name: 'twitter', classes: [''] },
    ];

  }

}