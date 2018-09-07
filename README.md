**NOTE: Support for this library has stopped at FontAwesome 4.7. If you are using FontAwesome 5+ use FontAwesome's own Angular library. [link](https://github.com/FortAwesome/angular-fontawesome)**

# Angular Font Awesome
Simple, easy to use [Angular](https://angular.io) component to manage Font Awesome icons.

Built with [Angular QuickStart Lib](https://github.com/filipesilva/angular-quickstart-lib).

# How to install

**Install Packages**
`npm install --save font-awesome angular-font-awesome`

**Import the module:**
```typescript
//...
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  //...
  imports: [
    //...
    AngularFontAwesomeModule
  ],
  //...
})
export class AppModule { }
```

**If you're using [Angular CLI](https://github.com/angular/angular-cli), add the font-awesome CSS to `styles` inside the `angular-cli.json`**
```json
"styles": [
    "styles.css",
    "../node_modules/font-awesome/css/font-awesome.css"
],
```
**If you're using [Angular CLI](https://github.com/angular/angular-cli) 6.0.0, add the font-awesome CSS to `styles` inside the `angular.json`**
```json
"styles": [
    "styles.css",
    "./node_modules/font-awesome/css/font-awesome.css"
],
```

*NOTE: If using SCSS preprocessor just change the `css` for `scss`*


**If you're not using the CLI, import the stylesheet to your `index.html` file**
```html
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
```

# Usage and options

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [F-A Icons](https://fontawesome.com/v4.7.0/icons/) | No
size      | `String`           | `lg, 2x, 3x, 4x, 5x`                      | Yes
fixed     | `Boolean`          | `true, false`                            | Yes
animation |  `String`          | `spin, pulse`                            | Yes
rotate    |  `Number, String` | `90, 180, 270, horizontal, vertical`     | Yes
inverse   |  `Boolean`         | `true, false`                             | Yes

*Example Use*
```html
<fa name="cog" animation="spin"></fa>
```

# TODO
- Add [Stacked Icons](http://fontawesome.io/examples/#stacked) support
- Add [List Icons](http://fontawesome.io/examples/#list) support
- Tests
- Demo page
