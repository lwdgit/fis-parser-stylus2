# fis-parser-stylus2 ![NPM version](https://badge.fury.io/js/fis-parser-stylus2.png)

[![NPM Download](https://nodei.co/npm-dl/fis-parser-stylus2.png?months=1)](https://www.npmjs.org/package/fis-parser-stylus2)

> A fis parser plugin to compile stylus file.

## install

    $ npm install -g fis-parser-stylus2

```javascript
//fis-conf.js

fis.config.set('modules.parser.styl', 'stylus2');
fis.config.set('settings.parser.stylus2.define', {enable: true, color: '#000'});//you can add your settings
fis.config.set('settings.parser.stylus2.sourcemap', false);//use sourcemap or not, there are some bugs in stylus modules when it is opened
fis.config.set('roadmap.ext.styl', 'css');

```

    $ fis release -d ./output

## example 

see [example](https://github.com/lwdgit/fis-parser-stylus2/tree/master/example '')

# fis-parser-stylus2

> A fis parser plugin to compile stylus file.

## install

    $ npm install -g fis-parser-stylus2

```javascript
//fis-conf.js

fis.config.set('modules.parser.styl', 'stylus2');
fis.config.set('settings.parser.stylus2.define', {enable: true, color: '#000'});//you can add your settings
fis.config.set('settings.parser.stylus2.sourcemap', false);//use sourcemap or not, there are some bugs in stylus modules when it is opened
fis.config.set('roadmap.ext.styl', 'css');

```

    $ fis release -d ./output

## example 

see [example](https://github.com/lwdgit/fis-parser-stylus2/tree/master/example '')
