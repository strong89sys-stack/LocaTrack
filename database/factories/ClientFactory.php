<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => fake()->lastName(),
            'prenoms' => fake()->firstName(),
            'telephone' => fake()->unique()->phoneNumber(),
            'email' => fake()->unique()->email(),
            'adresse' => fake()->address(),
        ];
    }
}
