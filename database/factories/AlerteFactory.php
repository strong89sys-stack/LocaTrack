<?php

namespace Database\Factories;

use App\Models\Alerte;
use App\Models\Equipement;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Alerte>
 */
class AlerteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $resolue = fake()->boolean();

        return [
            'equipement_id' => Equipement::factory(),
            'type' => fake()->randomElement([
                'sortie de zone',
                'batterie faible',
                'appareil hors ligne',
            ]),
            'gravite' => fake()->randomElement([
                'faible',
                'moyenne',
                'critique',
            ]),
            'resolue' => $resolue,
            'date_resolution' => $resolue
                ? fake()->dateTimeBetween('-30 days', 'now')
                : null,
        ];
    }
}
