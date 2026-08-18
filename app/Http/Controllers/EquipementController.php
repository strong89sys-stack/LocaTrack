<?php

namespace App\Http\Controllers;

use App\Models\Equipement;
use App\Models\Statut;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EquipementController extends Controller
{
    public function index(){
        $equipements = Equipement::all();

        return inertia('equipements/index', [
            'equipements' => $equipements
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
