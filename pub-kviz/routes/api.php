<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\SeasonController;
use \App\Http\Controllers\QuizEventController;
use \App\Http\Controllers\SeasonQuizEventController;
use \App\Http\Controllers\MemberController;
use \App\Http\Controllers\ScoreboardController;
use \App\Http\Controllers\StatisticController;


use \App\Http\Controllers\API\AuthController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


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
Route::post('/export',[SeasonQuizEventController::class,'export']);

Route::resource('quiz_events',QuizEventController::class);
Route::put('seasons/{id}',[SeasonController::class,'update']);


Route::post('/register',[AuthController::class,'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware'=>['auth:sanctum','role:loggedIn']], function(){
    Route::get('/user',function(Request $request){
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::group(['middleware' => ['auth:sanctum','role:admin', 'adminLoggedIn']], function () {
    Route::get('/admin',function(Request $request){
        return $request->user();
    });

    Route::put('/members/{id}/update', [MemberController::class, 'update']);
    Route::delete('/members/{id}/delete', [MemberController::class, 'destroy']);

    Route::post('/members/insert', [MemberController::class,'insert']);

    Route::post('/admin/logout', [AuthController::class, 'logout']);
});


Route::post('/upload',function (Request $request)
{
    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $name = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $name);
        return response()->json(['message'=>'Image successfully uploaded']);
    } else{
    return response()->json(['message'=>'Data not found']);}
});



Route::post('forgot/password',[AuthController::class,'forgotPassword']);
Route::get('/scoreboards',[ScoreboardController::class,'index']);
Route::get('/quiz_events',[QuizEventController::class,'index']);

Route::get('/scoreboards/update',[ScoreboardController::class,'update']);
