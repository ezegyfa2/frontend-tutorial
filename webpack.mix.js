const mix = require('laravel-mix');
const path = require('path');
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@sass": path.resolve(
                __dirname,
                "resources/sass"
            ),
            "@helperVueComponents": path.resolve(
                __dirname,
                "node_modules/helper-vue-components/src"
            )
        }
    }
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
