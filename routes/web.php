<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\EquipementController;
use App\Http\Controllers\DashboardController;
use App\Models\Equipement;
// use App\Models\Statut;

Route::inertia('/', 'auth/login')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::put('/equipements/{id}', [EquipementController::class, 'updateEquipement']);
    Route::delete('equipements/{id}', [EquipementController::class, 'deleteEquipement']);

    Route::get('/tracking', [ClientController::class, 'index'])->name('tracking');
});

Route::get('/clients', [ClientController::class, 'index']);
Route::get('/clients/form', [ClientController::class, 'formShow']);
Route::post('/clients/create', [ClientController::class, 'createClient']);

// Equipement_Route
Route::get('/equipements', [EquipementController::class, 'index']);
Route::get('/equipements/create-form', [EquipementController::class, 'EquipementForm']);
Route::post('/equipements/create', [EquipementController::class,'createEquipement']);




Route::get('clients/{client}', [ClientController::class, "oneClient"]);
Route::get('equipements/{id}', [EquipementController::class, 'oneEquipement']);

require __DIR__.'/settings.php';
