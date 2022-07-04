const mix = require('laravel-mix');

mix.setPublicPath('./webroot')
    .js('assets/js/app.js', 'webroot/js').vue()
    
    //style frameworks
    .combine(['assets/framework/uikit-3.14.3/css/uikit.min.css',
              'assets/framework/normalize.min.css',]
              , 'webroot/css/main.css')

              //personal styles
              .less('assets/less/kemamiw.less', 'webroot/css/kemamiw.css')

              //framework scripts
     .js('assets/framework/uikit-3.14.3/js/uikit.min.js', 'webroot/js/main.js' )
    .version();
