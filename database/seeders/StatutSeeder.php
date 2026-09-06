<?php

namespace Database\Seeders;

use App\Models\Statut;
use Illuminate\Database\Seeder;

class StatutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Statut::create([
            'libelle' => 'Disponible',
        ]);
        Statut::create([
            'libelle' => 'En Location',
        ]);
        Statut::create([
            'libelle' => 'En Maintenance',
        ]);
        Statut::create([
            'libelle' => 'Hors Service',
        ]);
    }
}
