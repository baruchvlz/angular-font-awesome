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
*NOTE: If using SCSS preprocessor just change the `css` for `scss`*

**If you're not using the CLI, import the stylesheet to your `index.html` file**
```html
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
```

# Usage and

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [F-A Icons](http://fontawesome.io/icons/) | No
size      | `String`           | `lg, 2x, 3x, 4x, 5x`                      | Yes
fixed     | `Boolean`          | `true | false`                            | Yes
animation |  `String`          | `spin | pulse`                            | Yes
rotate    |  `Number | String` | `90 | 180 | 270` `horizontal | vertical`  | Yes
inverse   |  `Boolean`         | `true | false`                            | Yes

*Example Use*
```html
<fa name="cog" animation="spin"></fa>
```

# TODO
- Add [Stacked Icons](http://fontawesome.io/examples/#stacked) support
- Add [List Icons](http://fontawesome.io/examples/#list) support
- Tests
- Demo page
