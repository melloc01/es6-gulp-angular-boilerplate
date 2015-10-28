var Elixir = require ('laravel-elixir');

require('laravel-elixir-ngtemplatecache');
require('./config.js');

var basePath = Elixir.config.publicPath;

Elixir(function (mix) {

	return mix
		.sass('app/src/*/*.scss')
		.ngTemplateCache('/**/*.tpl.html',  'app/', 'app', {
        templateCache: {
            standalone: true
        },
        htmlmin: {
            collapseWhitespace: true,
            removeComments: true
        }
    })
		.browserify('app/main.js', basePath + '/js/')
		.browserSync(
			[
				'app/*'
			]);

    

});