var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var AngularFontAwesomeComponent = /** @class */ (function () {
    function AngularFontAwesomeComponent() {
        this._optionalClasses = [];
    }
    AngularFontAwesomeComponent.prototype.ngOnInit = function () {
        if (!this.name) {
            throw new Error('Missing "name" property for Angular2 Font Awesome component');
        }
        if (this.size) {
            this.addToOptionalClasses("fa-" + this.size);
        }
        if (this.fixed) {
            this.addToOptionalClasses("fa-fw");
        }
        if (this.animation) {
            this.addToOptionalClasses("fa-" + this.animation);
        }
        if (this.rotate) {
            var rotateClass = (typeof this.rotate === 'number') ? "fa-rotate-" + this.rotate
                : "fa-flip-" + this.rotate;
            this.addToOptionalClasses(rotateClass);
        }
        if (this.inverse) {
            this.addToOptionalClasses("fa-inverse");
        }
    };
    Object.defineProperty(AngularFontAwesomeComponent.prototype, "optionalClasses", {
        get: function () {
            return this._optionalClasses;
        },
        enumerable: true,
        configurable: true
    });
    AngularFontAwesomeComponent.prototype.addToOptionalClasses = function (addClass) {
        this._optionalClasses.push(addClass);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AngularFontAwesomeComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AngularFontAwesomeComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AngularFontAwesomeComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AngularFontAwesomeComponent.prototype, "fixed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AngularFontAwesomeComponent.prototype, "animation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AngularFontAwesomeComponent.prototype, "rotate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AngularFontAwesomeComponent.prototype, "inverse", void 0);
    AngularFontAwesomeComponent = __decorate([
        Component({
            selector: 'fa, ng2-fa, ng4-fa, ng-fa',
            template: "\n    <i class=\"fa fa-{{name}}\" [ngClass]=\"optionalClasses\" aria-hidden=\"true\"></i>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AngularFontAwesomeComponent);
    return AngularFontAwesomeComponent;
}());
export { AngularFontAwesomeComponent };
//# sourceMappingURL=angular-font-awesome.component.js.map