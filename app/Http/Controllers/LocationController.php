<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Equipement;
use App\Models\Location;
use App\Models\ZoneGeofence;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
    /**
     * ID du statut "Disponible".
     */
    private const STATUT_DISPONIBLE = 1;

    /**
     * ID du statut "En location".
     */
    private const STATUT_EN_LOCATION = 2;

    /**
     * Afficher la liste des locations.
     */
    public function index()
    {
        /*
        |--------------------------------------------------------------------------
        | Expiration automatique des locations
        |--------------------------------------------------------------------------
        */

        $locationsExpirees = Location::with('equipement')
            ->where('statut', 'en_cours')
            ->whereDate('date_fin', '<=', now())
            ->get();

        foreach ($locationsExpirees as $location) {

            DB::transaction(function () use ($location) {

                /*
                |--------------------------------------------------------------------------
                | Terminer la location
                |--------------------------------------------------------------------------
                */

                $location->update([
                    'statut' => 'expiré',
                ]);

                /*
                |--------------------------------------------------------------------------
                | Remettre l'équipement en disponible
                |--------------------------------------------------------------------------
                */

                if ($location->equipement) {
                    $location->equipement->update([
                        'statut_id' => self::STATUT_DISPONIBLE,
                    ]);
                }
            });
        }

        /*
        |--------------------------------------------------------------------------
        | Récupération des locations
        |--------------------------------------------------------------------------
        */

        $locations = Location::with([
            'client:id,nom,prenoms,telephone,email,adresse',

            'equipement:id,reference,marque,modele,statut_id,image',

            'zoneGeofence:id,nom,rayon,tolerance',
        ])->get();

        return inertia('location/Location', [
            'locations' => $locations,
        ]);
    }

    /**
     * Afficher le formulaire de création d'une location.
     */
    public function showForm()
    {
        /*
        |--------------------------------------------------------------------------
        | Clients
        |--------------------------------------------------------------------------
        */

        $clients = Client::select([
            'id',
            'nom',
            'prenoms',
            'telephone',
            'email',
            'adresse',
        ])
            ->orderBy('prenoms', 'asc')
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Équipements disponibles uniquement
        |--------------------------------------------------------------------------
        */

        $equipements = Equipement::where(
            'statut_id',
            self::STATUT_DISPONIBLE
        )
            ->select([
                'id',
                'reference',
                'marque',
                'modele',
                'statut_id',
                'image',
            ])
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Zones géographiques
        |--------------------------------------------------------------------------
        */

        $zone_geofence = ZoneGeofence::select([
            'id',
            'nom',
        ])->get();

        return inertia('location/LocationRegister', [
            'clients' => $clients,
            'equipements' => $equipements,
            'zone_geofence' => $zone_geofence,
        ]);
    }

    /**
     * Créer une nouvelle location.
     */
    public function createLocation(Request $request): RedirectResponse
    {
        /*
        |--------------------------------------------------------------------------
        | Validation
        |--------------------------------------------------------------------------
        */

        $validated = $request->validate([
            'client_id' => [
                'required',
                'integer',
                'exists:clients,id',
            ],

            'equipement_id' => [
                'required',
                'integer',
                'exists:equipements,id',
            ],

            'zone_geofence_id' => [
                'nullable',
                'integer',
                'exists:zone_geofences,id',
            ],

            'date_debut' => [
                'required',
                'date',
            ],

            'date_fin' => [
                'required',
                'date',
                'after_or_equal:date_debut',
            ],
        ]);

        /*
        |--------------------------------------------------------------------------
        | Récupérer l'équipement
        |--------------------------------------------------------------------------
        */

        $equipement = Equipement::findOrFail(
            $validated['equipement_id']
        );

        /*
        |--------------------------------------------------------------------------
        | Vérifier que l'équipement est disponible
        |--------------------------------------------------------------------------
        */

        if (
            (int) $equipement->statut_id
            !== self::STATUT_DISPONIBLE
        ) {
            return back()
                ->withInput()
                ->with(
                    'error',
                    'Impossible de louer cet équipement : il n’est pas disponible.'
                );
        }

        /*
        |--------------------------------------------------------------------------
        | Création de la location + changement du statut
        |--------------------------------------------------------------------------
        */

        DB::transaction(function () use (
            $validated,
            $equipement
        ) {

            /*
            |--------------------------------------------------------------------------
            | Statut de la location
            |--------------------------------------------------------------------------
            */

            $validated['statut'] = 'en_cours';

            /*
            |--------------------------------------------------------------------------
            | Créer la location
            |--------------------------------------------------------------------------
            */

            Location::create($validated);

            /*
            |--------------------------------------------------------------------------
            | Passer l'équipement en "en location"
            |--------------------------------------------------------------------------
            */

            $equipement->update([
                'statut_id' => self::STATUT_EN_LOCATION,
            ]);
        });

        return redirect()
            ->route('location')
            ->with(
                'success',
                'Location créée avec succès. L’équipement est maintenant en location.'
            );
    }

    /**
     * Faire expirer une location.
     */
    public function expire(Location $location): RedirectResponse
    {
        /*
        |--------------------------------------------------------------------------
        | Vérifier que la location n'est pas déjà terminée
        |--------------------------------------------------------------------------
        */

        if ($location->statut === 'expiré') {
            return back()->with(
                'error',
                'Cette location est déjà terminée.'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Terminer la location + libérer l'équipement
        |--------------------------------------------------------------------------
        */

        DB::transaction(function () use ($location) {

            /*
            |--------------------------------------------------------------------------
            | Terminer la location
            |--------------------------------------------------------------------------
            */

            $location->update([
                'statut' => 'expiré',
            ]);

            /*
            |--------------------------------------------------------------------------
            | Remettre l'équipement en disponible
            |--------------------------------------------------------------------------
            */

            if ($location->equipement) {
                $location->equipement->update([
                    'statut_id' => self::STATUT_DISPONIBLE,
                ]);
            }
        });

        return back()->with(
            'success',
            'Location terminée. L’équipement est maintenant disponible.'
        );
    }

    /**
     * Prolonger une location.
     */
    public function prolonger(
        Request $request,
        Location $location
    ): RedirectResponse {

        /*
        |--------------------------------------------------------------------------
        | Vérifier que la location est encore en cours
        |--------------------------------------------------------------------------
        */

        if ($location->statut !== 'en_cours') {
            return back()->with(
                'error',
                'Impossible de prolonger une location terminée.'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Validation
        |--------------------------------------------------------------------------
        */

        $validated = $request->validate([
            'date_fin' => [
                'required',
                'date',
                'after:' . $location->date_fin,
            ],
        ]);

        /*
        |--------------------------------------------------------------------------
        | Mise à jour
        |--------------------------------------------------------------------------
        */

        $location->update([
            'date_fin' => $validated['date_fin'],
        ]);

        return back()->with(
            'success',
            'Location prolongée avec succès.'
        );
    }
}