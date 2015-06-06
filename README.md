# fis-parser-stylus2

A parser plugin for fis to compile stylus file.

## usage

    $ npm install -g fis
    $ npm install -g fis-parser-stylus2
    $ vi example/fis-conf.js

```javascript
//fis-conf.js

fis.config.set('modules.parser.styl', 'stylus2');
fis.config.set('settings.parser.stylus2.define', {enable: true, color: '#000'});//you can add your settings
fis.config.set('settings.parser.stylus2.sourcemap', false);//use sourcemap or not, there are some bugs in stylus modules when it opened
fis.config.set('roadmap.ext.styl', 'css');


```

