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
        Schema::create("locations", function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained('clients', 'id')->onDelete('cascade');
            $table->foreignId('equipement_id')->constrained('equipements', 'id')->onDelete('cascade');
            $table->foreignId('zone_geofence_id')->constrained('zone_geofences', 'id')->onDelete('cascade');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->string('statut');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("locations");
    }
};
