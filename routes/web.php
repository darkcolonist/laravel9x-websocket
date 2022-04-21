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
    "title" => "test announcement - ".\Illuminate\Support\Str::random(rand(2,5)),
    "date" => \Carbon\Carbon::now(),
    "hash" => \Illuminate\Support\Str::random(rand(4,16))
  ];
  event(new \App\Events\SendMessage($someData));
  return response([
    "code" => 200,
    "message" => "event fired.",
  ]);
});