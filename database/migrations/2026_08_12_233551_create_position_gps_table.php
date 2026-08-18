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
        schema::create('position_gps', function(Blueprint $table){
            $table->id();
            $table->foreignId('appareil_id')->constrained('appareils', 'id')->onDelete('cascade');
            $table->geometry('coordonnees', subtype: 'point', srid: 4326);
            $table->decimal('vitesse', 8, 2);
            $table->dateTime('date_heure');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('position_gps');
    }
};
