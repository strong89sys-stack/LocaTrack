<?php

namespace App\Http\Controllers;

use App\Models\Alerte;
use App\Models\Appareil;
use App\Models\Equipement;
use App\Models\Location;
use App\Models\Statut;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EquipementController extends Controller
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

        $appareils = Appareil::with('equipement')
            ->get([
                'id',
                'imei',
                'numero_sim',
                'niveau_batterie',
                'statut',
                'equipement_id',
            ]);

        $alertesActives = Alerte::where(
            'resolue',
            false
        )->count();

        return inertia('equipements/index', [
            'equipements' => $equipements,
            'appareils' => $appareils,
            'alertesActives' => $alertesActives,
        ]);
    }

    public function oneEquipement($id)
    {
        $equipement = Equipement::with('statut')
            ->findOrFail($id);

        $statuts = Statut::all();

        $enLocation = Location::where(
            'equipement_id',
            $equipement->id
        )
            ->where('statut', 'en_cours')
            ->exists();

        return inertia('equipements/show', [
            'equipement' => $equipement,
            'statuts' => $statuts,
            'enLocation' => $enLocation,
        ]);
    }

    public function updateStatut(Request $request, $id)
    {
        $equipement = Equipement::findOrFail($id);

        $validated = $request->validate([
            'statut_id' => [
                'required',
                'integer',
                'exists:statuts,id',
            ],
        ]);

        $enLocation = Location::where(
            'equipement_id',
            $equipement->id
        )
            ->where('statut', 'en_cours')
            ->exists();

        if ($enLocation) {
            return back()->with(
                'error',
                'Impossible de modifier le statut : cet équipement est actuellement en location.'
            );
        }

        $equipement->update([
            'statut_id' => $validated['statut_id'],
        ]);

        return back()->with(
            'success',
            'Statut de l’équipement modifié avec succès.'
        );
    }

    public function EquipementForm()
    {
        $statuts = Statut::all();

        return inertia('equipements/CreateEquipement', [
            'statuts' => $statuts,
        ]);
    }

    public function createEquipement(Request $request)
    {
        $validated = $request->validate([
            'reference' => 'required|string|max:255',
            'marque' => 'required|string|max:255',
            'modele' => 'required|string|max:255',
            'statut_id' => 'required|integer|exists:statuts,id',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp',
        ]);

        $imagePath = $request
            ->file('image')
            ->store('equipements', 'public');

        $validated['image'] = $imagePath;

        Equipement::create($validated);

        return back()->with(
            'success',
            'Équipement créé avec succès.'
        );
    }

    public function updateEquipement(Request $request, $id)
    {
        $equipement = Equipement::findOrFail($id);

        $validated = $request->validate([
            'reference' => 'required|string|max:255',
            'marque' => 'required|string|max:255',
            'modele' => 'required|string|max:255',
            'statut_id' => 'required|integer|exists:statuts,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Vérification de la location
        |--------------------------------------------------------------------------
        */

        $enLocation = Location::where(
            'equipement_id',
            $equipement->id
        )
            ->where('statut', 'en_cours')
            ->exists();

        /*
        | Si l'équipement est en location et que le statut demandé
        | est différent de son statut actuel, on bloque.
        */

        if (
            $enLocation &&
            (int) $validated['statut_id'] !== (int) $equipement->statut_id
        ) {
            return back()->with(
                'error',
                'Impossible de modifier le statut : cet équipement est actuellement en location.'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Image
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('image')) {
            if ($equipement->image) {
                Storage::disk('public')->delete(
                    $equipement->image
                );
            }

            $validated['image'] = $request
                ->file('image')
                ->store('equipements', 'public');
        }

        $equipement->update($validated);

        return back()->with(
            'success',
            'Équipement modifié avec succès.'
        );
    }

    public function deleteEquipement($id)
    {
        $equipement = Equipement::findOrFail($id);

        $enLocation = Location::where(
            'equipement_id',
            $equipement->id
        )
            ->where('statut', 'en_cours')
            ->exists();

        if ($enLocation) {
            return back()->with(
                'error',
                'Impossible de supprimer cet équipement : il est actuellement en location.'
            );
        }

        if ($equipement->image) {
            Storage::disk('public')->delete(
                $equipement->image
            );
        }

        $equipement->delete();

        return back()->with(
            'success',
            'Équipement supprimé avec succès.'
        );
    }
}