<?php

namespace Database\Factories;

use App\Models\PositionGps;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends Factory<PositionGps>
 */
class PositionGpsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'appareil_id' => fake()->numberBetween(1, 50),
            'coordonnees' => DB::raw(
                sprintf(
                    "ST_GeomFromText('POINT(%s %s)', 4326)",
                    fake()->longitude(-4.15, -3.85),
                    fake()->latitude(5.25, 5.50)
                )
            ),
            'vitesse' => fake()->randomFloat(2, 0, 120),
            'date_heure' => fake()->dateTimeBetween('-7 days', 'now'),
        ];
    }
}
