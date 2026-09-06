<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'nom' => 'Administrateur',
        ]);
        Role::create([
            'nom' => 'Gestionnaire',
        ]);
        Role::create([
            'nom' => 'Opérateur',
        ]);
    }
}
