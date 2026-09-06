<?php

namespace Database\Seeders;

use App\Models\Alerte;
use App\Models\Equipement;
use Illuminate\Database\Seeder;

class AlerteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $equipements = Equipement::all();

        foreach ($equipements as $equipement) {
            Alerte::factory()
                ->count(fake()->numberBetween(1, 5))
                ->firstOrCreate([
                    'equipement_id' => $equipement->id,
                ]);
        }
    }
}
