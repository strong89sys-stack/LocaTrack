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
        Schema::create('statuts', function (Blueprint $table) {
            $table->id();
            $table->string('libelle');
            $table->timestamps();
        });

        Schema::create('equipements', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->unique();
            $table->string('marque');
            $table->string('modele');
            $table->string('image')->nullable(true);
            $table->foreignId('statut_id')->constrained('statuts', 'id');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipements');
        Schema::dropIfExists('statuts');
    }
};
