<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/basic-component', function () {
    return view('basicComponent');
});

Route::get('/component-with-child', function () {
    return view('componentWithChild');
});

Route::get('/basic-template', function () {
    return view('basicTemplate');
});

Route::get('/basic-template-with-param-file', function () {
    return view('basicTemplateWithParamFile');
});

Route::get('/template-with-sub-templates', function () {
    return view('templateWithSubTemplates');
});

Route::get('/template-with-sub-templates-with-params', function () {
    return view('templateWithSubTemplatesWithParams');
});

Route::get('/template-with-array-sub-templates', function () {
    return view('templateWithArraySubTemplates');
});

Route::get('/template-with-object-array-sub-templates', function () {
    return view('templateWithObjectArraySubTemplates');
});
