<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index(){
        $clients = Client::all();

        return inertia('clients/index', [
            'clients' => $clients
        ]);
    }
    public function oneClient($id){
        $client = Client::findOrFail($id);
        return inertia('clients/show',[
            'client' => $client
        ]);
    }
    public function createClient(Request $request){

        $validate = $request->validate([
            'nom' => 'required|string|max:255',
            'prenoms'=> 'required|string|max:255',
            'telephone' => 'required|string|min:10|max:18',
            'email'=> 'required|email|unique:clients,email',
            'adresse' => 'required|string|max:255',
        ]);

        // dd($request->all());

        try{
            $client = Client::create($validate);
            return back()->with('success', 'Client créer avec succès !');
        }
        catch(\Throwable $e){
            dd([
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line'=> $e->getLine(),
            ]);
        }


    }

    public function formShow(){
        return inertia('clients/create', []);
    }
}
