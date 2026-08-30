<?php

namespace Database\Factories;

use App\Models\ZoneGeofence;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends Factory<ZoneGeofence>
 */
class ZoneGeofenceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => fake()->randomElement([
                'Anyama',
                'Yopougon',
                'Plateau',
                'Koumassi',
                'Abobo',
            ]),
            'centre' => DB::raw(
                sprintf(
                    "ST_GeomFromText('POINT(%s %s)', 4326)",
                    fake()->longitude(-4.15, -3.85),
                    fake()->latitude(5.25, 5.50)
                )
            ),
            'rayon' => fake()->numberBetween(100, 5000),
            'tolerance' => fake()->numberBetween(10, 500),
        ];
    }
}
