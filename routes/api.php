<?php

use App\Http\Controllers\GpsController;
use Illuminate\Support\Facades\Route;

Route::post('/gps/positions', [GpsController::class, 'store'])
    ->name('gps.store');
