<?php

namespace Database\Factories;

use App\Models\Equipement;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Equipement>
 */
class EquipementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'reference' =>fake()->uuid(),
            'marque' =>fake()->randomElement([
                'Caterpillar',
                'Komatsu',
                'JCB',
                'Volvo',
                'Hitachi',
            ]),
            'modele' =>fake()->bothify('MODEL-###??'),
            'statut_id'=>fake()->numberBetween(1, 4),
        ];
    }
}
