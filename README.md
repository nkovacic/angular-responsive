# Angular Responsive

[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://www.opensource.org/licenses/MIT)
[![NPM Release](https://img.shields.io/npm/v/angular-responsive.svg?style=flat-square)](https://www.npmjs.org/package/angular-responsive)
[![NPM Monthly Downloads](https://img.shields.io/npm/dm/angular-responsive.svg?style=flat-square)](https://www.npmjs.org/package/angular-responsive)

<!---
## Demo

[Demo](http://nkovacic.github.io/angular-responsive/)
-->
## Requirements

1. `AngularJS` ≥ `1.5.x`

### Where to get it

**Via NPM:**

Run `npm install angular-responsive` from the command line.
Include script tags similar to the following:
```html
<link rel='stylesheet' href='/node_modules/angular-responsive/dist/angular-responsive.css'>
<script src='/node_modules/angular-responsive/dist/angular-responsive.min.js'></script>
```
Install using commonjs (eg componentjs, Webpack, Browserify):
```
angular.module('myModule', [require('angular-responsive')]);
```

**Via Github**

Download the code from [https://github.com/nkovacic/angular-responsive/releases/latest](https://github.com/nkovacic/angular-responsive/releases/latest), unzip the files then add script tags similar to the following:
```html
<link rel='stylesheet' href='/path/to/unzipped/files/dist/angular-responsive.min.css'>
<script src='/path/to/unzipped/files/dist/angular-responsive.min.js'></script>
```

### Usage

3. Include `angular-responsive.min.js`
4. Add a dependency to `angular-responsive` in your app module, for example: ```angular.module('myModule', ['nk.responsive'])```.
5. Add the attribute `responsive-if` to your element. It can have  selected number value:
```html
<div responsive-if="mobile,tablet"></div>
```

