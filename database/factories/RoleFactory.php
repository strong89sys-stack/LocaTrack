<?php

namespace Database\Factories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Role>
 */
class RoleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => 'Administrateur'
        ];
    }

    public function gestionnaire(): static
    {
        return $this->state(fn (array $attributes) => [
            'nom' => 'Gestionnaire'
        ]);
    }
    public function operateur(): static
    {
        return $this->state(fn (array $attributes) => [
            'nom' => 'Opérateur'
        ]);
    }
}
