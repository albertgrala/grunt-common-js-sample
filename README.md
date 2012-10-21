# grunt-common-js-sample

This is a simple test

## Getting Started
### On the server
Install the module with: `npm install grunt-common-js-sample`

```javascript
var grunt_common_js_sample = require('grunt-common-js-sample');
grunt_common_js_sample.awesome(); // "awesome"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/albertgrala/grunt-commonjs-sample/master/dist/grunt-common-js-sample.min.js
[max]: https://raw.github.com/albertgrala/grunt-commonjs-sample/master/dist/grunt-common-js-sample.js

In your web page:

```html
<script src="dist/grunt-common-js-sample.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach grunt-common-js-sample's methods to any object.

```html
<script>
this.exports = Bocoup.utils;
</script>
<script src="dist/grunt-common-js-sample.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Albert Gracia  
Licensed under the MIT license.
