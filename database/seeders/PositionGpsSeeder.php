<?php

namespace Database\Seeders;

use App\Models\Appareil;
use App\Models\PositionGps;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionGpsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $appareils = Appareil::all();

        foreach ($appareils as $appareil) {
            PositionGps::factory()
                ->count(20)
                ->create([
                    'appareil_id' => $appareil->id,
                ]);
        }
    }
}
