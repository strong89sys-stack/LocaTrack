<?php

namespace App\Http\Controllers;

use App\Services\ReverseGeocodingService;
use App\Models\Appareil;
use App\Models\PositionGps;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Events\PositionUpdated;

class GpsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, ReverseGeocodingService $geocoding)
    {
        $validated = $request->validate([
            'imei' => [
                'required',
                'string',
                'exists:appareils,imei',
            ],

            'latitude' => [
                'required',
                'numeric',
                'between:-90,90',
            ],

            'longitude' => [
                'required',
                'numeric',
                'between:-180,180',
            ],

            'vitesse' => [
                'required',
                'numeric',
                'min:0',
            ],
        ]);

        $adresse = $geocoding->getAddress(
            (float) $validated['longitude'],
            (float) $validated['latitude']
        );

        $appareil = Appareil::where(
            'imei',
            $validated['imei']
        )->firstOrFail();

        $position = PositionGps::create([
            'appareil_id' => $appareil->id,

            'coordonnees' => DB::raw(
                "ST_SetSRID(
                    ST_MakePoint(
                        {$validated['longitude']},
                        {$validated['latitude']}
                    ),
                    4326
                )"
            ),

            'adresse' => $adresse,

            'vitesse' => $validated['vitesse'],

            'date_heure' => now(),
        ]);

        PositionUpdated::dispatch($position);

        return response()->json([
            'message' => 'Position enregistrée avec succès.',
            'position_id' => $position->id,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
