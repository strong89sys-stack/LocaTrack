<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("zone_geofences", function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->geometry('centre', subtype: 'point', srid: 4326);
            $table->decimal('rayon', 10, 2);
            $table->decimal('tolerance', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('zone_geofences');
    }
};
