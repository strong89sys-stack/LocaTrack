<?php

namespace App\Http\Controllers;

use App\Models\Alerte;
use App\Models\Equipement;
use Illuminate\Support\Facades\DB;

class LiveTrackingController extends Controller
{
    public function index()
    {
        $equipements = Equipement::with([
            'statut',
            'appareil',
            'dernierePositionGps',
        ])
            ->get([
                'id',
                'reference',
                'marque',
                'modele',
                'statut_id',
                'image',
            ]);

        $equipements = $equipements->map(function ($equipement) {

            $position = $equipement->dernierePositionGps;

            return [
                'id' => $equipement->id,
                'reference' => $equipement->reference,
                'marque' => $equipement->marque,
                'modele' => $equipement->modele,
                'image' => $equipement->image,
                'statut_id' => $equipement->statut_id,

                'statut' => $equipement->statut,

                'appareil' => $equipement->appareil ? [
                    'id' => $equipement->appareil->id,
                    'imei' => $equipement->appareil->imei,
                    'numero_sim' => $equipement->appareil->numero_sim,
                    'niveau_batterie' => $equipement->appareil->niveau_batterie,
                    'statut' => $equipement->appareil->statut,
                ] : null,

                'position' => $position ? [
                    'latitude' => DB::selectOne(
                        'SELECT ST_Y(?) AS latitude',
                        [$position->coordonnees]
                    )->latitude,

                    'longitude' => DB::selectOne(
                        'SELECT ST_X(?) AS longitude',
                        [$position->coordonnees]
                    )->longitude,

                    'adresse' => $position->adresse,
                    'vitesse' => $position->vitesse,
                    'date_heure' => $position->date_heure,
                ] : null,
            ];
        });

        $alertesActives = Alerte::where('resolue', false)->count();

        return inertia('live_tracking/LiveTracking', [
            'equipements' => $equipements,
            'alertesActives' => $alertesActives,
        ]);
    }
}
