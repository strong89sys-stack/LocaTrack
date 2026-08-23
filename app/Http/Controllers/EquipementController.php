<?php

namespace App\Http\Controllers;

use App\Models\Equipement;
use App\Models\Statut;
use App\Models\Alerte;
use App\Models\Appareil;
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

                    'vitesse' => $position->vitesse,
                    'date_heure' => $position->date_heure,
                ] : null,
            ];
        });

        // TOUS les appareils, rattachés ou non
        $appareils = Appareil::with('equipement')
            ->get([
                'id',
                'imei',
                'numero_sim',
                'niveau_batterie',
                'statut',
                'equipement_id',
            ]);

        $alertesActives = Alerte::where('resolue', false)->count();

        return inertia('equipements/index', [
            'equipements' => $equipements,
            'appareils' => $appareils,
            'alertesActives' => $alertesActives,
        ]);
    }

    public function oneEquipement($id){
        $equipement = Equipement::findOrFail($id);

        return inertia('equipements/show', [
            'equipement' => $equipement
        ]);
    }

    public function EquipementForm(){
        $statuts = Statut::all();
        return inertia('equipements/CreateEquipement', [
            'statuts'=> $statuts
        ]);
    }

    public function createEquipement(Request $request){

        try{
            $validate = $request->validate([
                'reference' => 'required|string|max:255',
                'marque' => 'required|string|max:255',
                'modele' => 'required|string|max:255',
                'statut_id' => 'required|integer|exists:statuts,id',
                'image' => 'required|image|mimes:jpeg,png,jpg,webp',
            ]);

            $image_path = $request->file('image')->store('equipements', 'public');
            $validate['image'] = $image_path;

            $equipement = Equipement::create($validate);
            return back()->with('success','Equipement créer avec succès');
        }
        catch(\Throwable $e){
            dd([
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line'=> $e->getLine(),
            ]);
        }
    }

    public function updateEquipement(Request $request, $id){
        $equipement = Equipement::findOrFail($id);

        try{
            $validate = $request->validate([
                'reference' => 'required|string|max:255',
                'marque' => 'required|string|max:255',
                'modele' => 'required|string|max:255',
                'statut_id' => 'required|integer|exists:statuts,id',
                'image' => 'required|image|mimes:jpeg,png,jpg,webp',
            ]);

            if ($request->hasFile('image')) {

                //Supprimer l'ancienne image
                if($equipement->image) {
                    Storage::disk('public')->delete($equipement->image);
                }

                //Enregistrer la nouvelle image
                $validate['image'] = $request
                ->file('image')->store('equipements', 'public');
            }

            $equipement->update($validate);
            return back()->with('success', 'Equipement modifié avec succès');
        }
        catch(\Throwable $e){
            dd([
                'message' => $e->getMessage(),
                'file'=> $e->getFile(),
                'line'=> $e->getLine(),
            ]);
        }
    }

    public function deleteEquipement($id){
        $equipement = Equipement::findOrFail($id);

        try{
            // Supprimer l'image
            if ($equipement->image) {
                Storage::disk('public')->delete($equipement->image);
            }

            $equipement->delete();

            return back()->with(
                'success',
                'Équipement supprimé avec succès'
            );

        } catch (\Throwable $e) {
            dd([
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
        }
    }
}
