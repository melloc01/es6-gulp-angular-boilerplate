var Elixir = require('laravel-elixir');

if (Elixir.config.production) {

	Elixir.config.publicPath = 'bin';

}