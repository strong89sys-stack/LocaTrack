<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PositionGps extends Model
{
    use HasFactory;

    protected $fillable = ['appareil_id', 'coordonnees', 'adresse', 'vitesse', 'date_heure'];

    protected $guarded = ['id'];

    protected $casts = [
        'vitesse' => 'decimal:2',
        'date_heure' => 'datetime',
    ];

    public function appareil()
    {
        return $this->belongsTo(Appareil::class);
    }
}
