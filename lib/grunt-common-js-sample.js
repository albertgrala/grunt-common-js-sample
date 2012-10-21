/*
 * grunt-common-js-sample
 * https://github.com/albertgrala/grunt-commonjs-sample
 *
 * Copyright (c) 2012 Albert Gracia
 * Licensed under the MIT license.
 */

(function(exports) {

  exports.awesome = function() {
    return 'awesome';
  };

}(typeof exports === 'object' && exports || this));
