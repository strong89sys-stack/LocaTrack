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
        Statut::firstOrCreate([
            'libelle' => 'Disponible',
        ]);
        Statut::firstOrCreate([
            'libelle' => 'En Location',
        ]);
        Statut::firstOrCreate([
            'libelle' => 'En Maintenance',
        ]);
        Statut::firstOrCreate([
            'libelle' => 'Hors Service',
        ]);
    }
}
