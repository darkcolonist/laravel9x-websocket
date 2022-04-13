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

Route::get('/test', function () {

  $someData = [
    "date" => \Carbon\Carbon::now(),
    "hash" => Illuminate\Support\Str::random(40)
  ];

  event(new \App\Events\SendMessage($someData));
  return response([
    "code" => 200,
    "message" => "event fired.",
  ]);
});