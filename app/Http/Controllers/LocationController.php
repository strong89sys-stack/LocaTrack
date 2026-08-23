<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Equipement;
use App\Models\Location;
use App\Models\ZoneGeofence;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Afficher la liste des locations.
     */
    public function index()
    {
        // Expiration automatique des locations arrivées à terme
        Location::where('statut', 'en_cours')
            ->whereDate('date_fin', '<=', now())
            ->update([
                'statut' => 'expiré',
            ]);

        // Récupération des locations
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

        $equipements = Equipement::select([
            'id',
            'reference',
            'marque',
            'modele',
            'statut_id',
            'image',
        ])
            ->get();

        $zone_geofence = ZoneGeofence::select([
            'id',
            'nom',
        ])
            ->get();

        return inertia('location/LocationRegister', [
            'clients' => $clients,
            'equipements' => $equipements,
            'zone_geofence' => $zone_geofence
        ]);
    }

    /**
     * Créer une nouvelle location.
     */
    public function createLocation(Request $request): RedirectResponse
    {
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

        $validated['statut'] = 'en_cours';

        Location::create($validated);

        return redirect()
            ->route('location')
            ->with('success', 'Location créée avec succès.');
    }

    /**
     * Faire expirer une location.
     */
    public function expire(Location $location): RedirectResponse
    {
        $location->update([
            'statut' => 'expiré',
        ]);

        return back();
    }
}