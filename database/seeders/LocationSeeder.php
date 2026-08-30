<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Equipement;
use App\Models\Location;
use App\Models\ZoneGeofence;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $clients = Client::all();
        $equipements = Equipement::all();
        $zones = ZoneGeofence::all();

        for ($i = 0; $i < 50; $i++) {
            Location::factory()->create([
                'client_id' => $clients->random()->id,
                'equipement_id' => $equipements->random()->id,
                'zone_geofence_id' => $zones->random()->id,
            ]);
        }
    }
}
