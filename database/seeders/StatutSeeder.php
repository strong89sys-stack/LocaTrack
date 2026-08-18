<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Statut;

class StatutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Statut::create([
            "libelle"=> "Disponible",
        ]);
        Statut::create([
            "libelle"=> "En Location",
        ]);
        Statut::create([
            "libelle"=> "En Maintenance",
        ]);
        Statut::create([
            "libelle"=> "Hors Service",
        ]);
    }
}