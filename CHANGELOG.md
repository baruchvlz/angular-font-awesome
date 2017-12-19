# [3.1.0] (2017-12-19)
* Fix erroneous files being published

# [3.0.4] (2017-12-18)
* Fix Angular dependency


# [3.0.1] (2017-11-06)

* Fix module and component name.
* Rename library files.
* Remove `font-awesome` as a dependency of the library move it to peer dependency.
* Added `.npmignore` file.
* Added `package-lock.json` file.

# [3.0.0] (2017-11-05)

After the release of Angular version 5 the library was giving an [error](https://github.com/baruchvlz/angular-font-awesome/issues/25) with the compiler, this lead
me into having to rethink the whole development structure of the library.

* Reduced the amount of possible tags to just one (1) `<fa></fa>`
* Better development structure

**Breaking Change**
The module for import has changed from `angular-font-awesome/angular-font-awesome` to `angular-font-awesome`.

Example
```typescript
// ...
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
})
```


# [2.3.7] (2017-08-15)

* Actually removed `postinstall` script from `package.json`

# [2.3.5] (2017-08-15)

* Remove postinstall script to avoid having typescript in production
* Added `tsc` generated files to npm package

# [2.3.4] (2017-08-12)

* Add postinstall script instead of having the generated files added to the package
* Updated package JSON


# [2.2.x]

* 2.2 had a lot of issues with Ionic and non-cli generated projects where the tsc generated files where needed. Skipped to 2.3 with fixes.

# [2.0.4] (2017-08-11)

* Added generated files to the npm package for libraries that require `.js` files and/or can't use `.ts`

# [2.0.0] (2017-06-04)

**Important Changes**
* Repository's name changed from angular2-font-awesome to angular-font-awesome this may cause some errors when using the library

* Updated library to support Angular 4 and Angular 2 as suggested ([here](https://github.com/baruchvlz/angular-font-awesome/issues/7))
* Changed repository's name to match package's name
