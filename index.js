/*
 * fis
 *
 */

'use strict';

var stylus = require('stylus'), settings;

module.exports = function(content, file, conf){
  var fn, settings = function (style) {
  	if (conf.define) {
  		for (var i in conf.define) {
  			style.define(i, conf.define[i]);
  		}
  	}
  },paths = conf.paths? conf.paths : [],
  sourcemap = conf.sourcemap? {} : false;



  stylus(content).use(settings)
  .set('compress', conf.compress? true: false)
  .set('paths', [file.dirname + '/'].concat(paths))
  .set('sourcemap', sourcemap)
  .render(function(err, css) {
    if (err) throw err;
    fn = css;
  });
  return fn.toString();
};
