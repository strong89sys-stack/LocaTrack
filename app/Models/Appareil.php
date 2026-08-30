<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appareil extends Model
{
    use HasFactory;

    protected $fillable = ['imei', 'numero_sim', 'niveau_batterie', 'statut', 'equipement_id'];

    protected $guarded = ['id'];

    protected $casts = [
        'niveau_batterie' => 'integer',
    ];

    public function equipement()
    {
        return $this->belongsTo(Equipement::class);
    }

    public function positionsGps()
    {
        return $this->hasMany(PositionGps::class);
    }
}
