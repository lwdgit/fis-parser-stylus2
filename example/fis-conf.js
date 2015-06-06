fis.config.set('modules.parser.styl', 'stylus2');
fis.config.set('settings.parser.stylus2.define', {enable: true, color: '#000'});//you can add your settings
fis.config.set('settings.parser.stylus2.sourcemap', false);//use sourcemap or not, there are some bugs in stylus modules when it is opened
fis.config.set('roadmap.ext.styl', 'css');