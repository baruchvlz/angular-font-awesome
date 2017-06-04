import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa, ng2-fa, ng4-fa, ng-fa',
  template: `
    <i class="fa fa-{{name}}" [ngClass]="optionalClasses" aria-hidden="true"></i>
  `
})
export class AngularFontAwesomeComponent implements OnInit {
  @Input() name        : string;
  // Optional Inputs
  @Input() title      ?: string;
  @Input() size       ?: string;
  @Input() fixed      ?: boolean;
  @Input() animation  ?: string;
  @Input() rotate     ?: string | number;
  @Input() inverse    ?: boolean;

  private _optionalClasses: string[] = [];
  constructor() { }

  ngOnInit() {
    if(!this.name){
      throw new Error('Missing "name" property for Angular2 Font Awesome component');
    }

    if(this.size) {
      this.addToOptionalClasses(`fa-${this.size}`);
    }

    if(this.fixed) {
      this.addToOptionalClasses(`fa-fw`);
    }

    if(this.animation) {
      this.addToOptionalClasses(`fa-${this.animation}`);
    }

    if(this.rotate){
      let rotateClass = (typeof this.rotate === 'number') ? `fa-rotate-${this.rotate}`
                                                          : `fa-flip-${this.rotate}`;
      this.addToOptionalClasses(rotateClass);
    }

    if(this.inverse) {
      this.addToOptionalClasses(`fa-inverse`);
    }

  }

  get optionalClasses() {
    return this._optionalClasses;
  }

  private addToOptionalClasses(addClass: string): void {
    this._optionalClasses.push(addClass);
  }

}
