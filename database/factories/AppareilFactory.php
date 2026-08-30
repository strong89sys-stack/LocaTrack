<?php

namespace Database\Factories;

use App\Models\Appareil;
use App\Models\Equipement;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Appareil>
 */
class AppareilFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'imei' => fake()->unique()->numerify('###############'),
            'numero_sim' => fake()->phoneNumber(),
            'niveau_batterie' => fake()->numberBetween(0, 100),
            'statut' => fake()->randomElement([
                'éteint',
                'allumé',
            ]),
            'equipement_id' => Equipement::factory(),
        ];
    }
}
