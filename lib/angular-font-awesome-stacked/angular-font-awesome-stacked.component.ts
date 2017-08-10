import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa-stacked, ng2-fa-stacked, ng4-fa-stacked, ng-fa-stacked',
  templateUrl: './angular-font-awesome-stacked.component.html',
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