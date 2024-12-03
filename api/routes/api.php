<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProgrammeController;


Route::get('/programmes', [ProgrammeController::class, 'index']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/programmes', [ProgrammeController::class, 'store']);
    Route::put('/programmes/{id}', [ProgrammeController::class, 'update']);
    Route::delete('/programmes/{id}', [ProgrammeController::class, 'destroy']);
});

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/
