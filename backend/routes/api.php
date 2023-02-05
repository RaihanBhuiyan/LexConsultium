<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    }); 
    Route::post('/logout' , [\App\Http\Controllers\Api\AuthController::class,'logout']);
    Route::apiResource('/users' , UserController::class);
    Route::resource('business_types', App\Http\Controllers\API\BusinessTypesAPIController::class);    
    Route::resource('accounts-ledgers', App\Http\Controllers\API\AccountsLedgerAPIController::class)
    ->except(['create', 'edit']);    
    Route::resource('daily-transactions', App\Http\Controllers\API\DailyTransactionsAPIController::class)
    ->except(['create', 'edit']);    
});
Route::post('/signup' , [\App\Http\Controllers\Api\AuthController::class, 'signup']);
Route::post('/login' , [\App\Http\Controllers\Api\AuthController::class, 'login']);


Route::resource('employees', App\Http\Controllers\API\EmployeeAPIController::class)
    ->except(['create', 'edit']);


