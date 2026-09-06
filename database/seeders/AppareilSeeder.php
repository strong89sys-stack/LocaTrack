<?php

namespace Database\Seeders;

use App\Models\Appareil;
use App\Models\Equipement;
use Illuminate\Database\Seeder;

class AppareilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Equipement::all()->each(function (Equipement $equipement) {
            Appareil::factory()->create([
                'equipement_id' => $equipement->id,
            ]);
        });
    }
}
