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
        Schema::create("appareils", function (Blueprint $table) {
            $table->id();
            $table->string("imei")->unique();
            $table->string("numero_sim");
            $table->unsignedTinyInteger("niveau_batterie");
            $table->string("statut");
            $table->foreignId("equipement_id")->unique()->constrained('equipements', 'id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("appareils");
    }
};
