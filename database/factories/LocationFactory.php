<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Equipement;
use App\Models\Location;
use App\Models\ZoneGeofence;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $dateDebut = fake()->dateTimeBetween('-6 months', 'now');

        $dateFin = fake()->dateTimeBetween(
            $dateDebut,
            '+6 months'
        );

        return [
            'client_id' => Client::factory(),
            'equipement_id' => Equipement::factory(),
            'zone_geofence_id' => ZoneGeofence::factory(),
            'date_debut' => $dateDebut,
            'date_fin' => $dateFin,
            'statut' => fake()->randomElement([
                'en_cours',
                'expiré',
            ]),
        ];
    }
}
