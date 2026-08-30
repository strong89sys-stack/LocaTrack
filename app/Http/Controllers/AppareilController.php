<?php

namespace App\Http\Controllers;

use App\Models\Appareil;
use App\Models\Equipement;
use Illuminate\Http\Request;

class AppareilController extends Controller
{
    public function index()
    {
        //
    }

    public function oneAppareil($id)
    {
        $appareil = Appareil::findOrFail($id);

        return inertia('equipements/showAppareil', [
            'appareil' => $appareil,
        ]);
    }

    public function AppareilForm()
    {
        $equipements = Equipement::whereDoesntHave('appareil')->get([
            'id',
            'reference',
            'marque',
            'modele',
        ]);

        return inertia('equipements/CreateGps', [
            'equipements' => $equipements,
        ]);
    }

    public function createAppareil(Request $request)
    {
        $validate = $request->validate([
            'imei' => 'required|string|max:255|unique:appareils,imei',
            'numero_sim' => 'required|string|max:255',
            'niveau_batterie' => 'required|integer|min:0|max:100',
            'statut' => 'required|string|max:255',
            'equipement_id' => 'required|integer|exists:equipements,id',
        ]);

        Appareil::create($validate);

        return back()->with(
            'success',
            'Appareil créé avec succès'
        );
    }

    public function updateAppareil(Request $request, $id)
    {
        $appareil = Appareil::findOrFail($id);

        $validate = $request->validate([
            'imei' => 'required|string|max:255|unique:appareils,imei,'.$appareil->id,
            'numero_sim' => 'required|string|max:255',
            'niveau_batterie' => 'required|integer|min:0|max:100',
            'statut' => 'required|string|max:255',
            'equipement_id' => 'required|integer|exists:equipements,id',
        ]);

        $appareil->update($validate);

        return back()->with(
            'success',
            'Appareil modifié avec succès'
        );
    }

    public function deleteAppareil($id)
    {
        $appareil = Appareil::findOrFail($id);

        $appareil->delete();

        return back()->with(
            'success',
            'Appareil supprimé avec succès'
        );
    }
}
