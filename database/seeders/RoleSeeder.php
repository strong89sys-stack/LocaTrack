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
        Role::firstOrCreate([
            'nom' => 'Administrateur',
        ]);
        Role::firstOrCreate([
            'nom' => 'Gestionnaire',
        ]);
        Role::firstOrCreate([
            'nom' => 'Opérateur',
        ]);
    }
}
