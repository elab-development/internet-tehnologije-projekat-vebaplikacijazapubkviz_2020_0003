<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\SeasonController;
use \App\Http\Controllers\QuizEventController;
use \App\Http\Controllers\SeasonQuizEventController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::get('/users',[UserController::class,'index']);
Route::get('/users/{id}',[UserController::class,'show']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
//Resurs ruta:
Route::resource('users',UserController::class);
Route::resource('seasons',SeasonController::class);

//Route::get('/seasons', [SeasonController::class, 'index' ]);
Route::get('/seasons/{id}', [SeasonController::class, 'show' ]);
Route::delete('/seasons/{id}', [SeasonController::class, 'destroy']);

Route::get('/seasons/{id}/quiz_events',[SeasonQuizEventController::class,'index']);

Route::resource('quiz_events',QuizEventController::class);


// Route::put('/seasons/{name}/quiz_events/{topic}/edit', [QuizEventController::class, 'edit']);

Route::put('seasons/{id}',[SeasonController::class,'update']);