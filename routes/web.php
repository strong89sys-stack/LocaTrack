<?php

use App\Http\Controllers\AppareilController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EquipementController;
use App\Http\Controllers\GpsController;
use App\Http\Controllers\LiveTrackingController;
use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'auth/login')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    Route::get(
        '/dashboard',
        [DashboardController::class, 'index']
    )->name('dashboard');

    /*
    |--------------------------------------------------------------------------
    | Équipements
    |--------------------------------------------------------------------------
    */

    Route::get(
        '/equipements',
        [EquipementController::class, 'index']
    )->name('equipements_list');

    Route::get(
        '/equipements/create-form',
        [EquipementController::class, 'EquipementForm']
    )->name('equipements.create');

    Route::post(
        '/equipements/create',
        [EquipementController::class, 'createEquipement']
    )->name('equipements.store');

    Route::put(
        '/equipements/{id}',
        [EquipementController::class, 'updateEquipement']
    )->name('equipements.update');

    Route::delete(
        '/equipements/{id}',
        [EquipementController::class, 'deleteEquipement']
    )->name('equipements.delete');

    Route::get(
        '/equipements/{id}',
        [EquipementController::class, 'oneEquipement']
    )->name('equipements.show');

    Route::put(
        '/equipements/{id}/statut',
        [EquipementController::class, 'updateStatut']
    )->name('equipements.statut.update');

    /*
    |--------------------------------------------------------------------------
    | Appareils
    |--------------------------------------------------------------------------
    */

    Route::get(
        '/appareils/create-form',
        [AppareilController::class, 'AppareilForm']
    )->name('appareils.create');

    Route::post(
        '/appareils/create',
        [AppareilController::class, 'createAppareil']
    )->name('appareils.store');

    Route::get(
        '/appareils/{id}',
        [AppareilController::class, 'oneAppareil']
    )->name('appareils.show');

    /*
    |--------------------------------------------------------------------------
    | Tracking
    |--------------------------------------------------------------------------
    */

    Route::get(
        '/tracking',
        [LiveTrackingController::class, 'index']
    )->name('tracking');

    /*
    |--------------------------------------------------------------------------
    | Locations
    |--------------------------------------------------------------------------
    */

    Route::get(
        '/locations',
        [LocationController::class, 'index']
    )->name('location');

    Route::get(
        '/locations/form',
        [LocationController::class, 'showForm']
    )->name('locations.create');

    Route::post(
        '/locations/create',
        [LocationController::class, 'createLocation']
    )->name('locations.store');

    Route::put(
        '/locations/{location}/expire',
        [LocationController::class, 'expire']
    )->name('locations.expire');

    Route::put(
        '/locations/{location}/prolonger',
        [LocationController::class, 'prolonger']
    )->name('locations.prolonger');

    /*
    |--------------------------------------------------------------------------
    | Clients
    |--------------------------------------------------------------------------
    */

    Route::get(
        '/clients/form',
        [ClientController::class, 'formShow']
    )->name('clients.create');

    Route::post(
        '/clients/create',
        [ClientController::class, 'createClient']
    )->name('clients.store');
});

/*
|--------------------------------------------------------------------------
| Clients publics
|--------------------------------------------------------------------------
*/

// Route::get(
//     '/clients',
//     [ClientController::class, 'index']
// );

// Route::get(
//     '/clients/{client}',
//     [ClientController::class, 'oneClient']
// );

/*
|--------------------------------------------------------------------------
| GPS
|--------------------------------------------------------------------------
*/

Route::post(
    '/gps/positions',
    [GpsController::class, 'store']
)->name('gps.store');

Route::get('/gps-test', function () {
    return inertia('GpsTest');
})->name('gps.test');

require __DIR__.'/settings.php';
