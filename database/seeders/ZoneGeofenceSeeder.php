<?php

namespace Database\Seeders;

use App\Models\ZoneGeofence;
use Illuminate\Database\Seeder;

class ZoneGeofenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ZoneGeofence::factory()->count(5)->firstOrCreate();
    }
}
