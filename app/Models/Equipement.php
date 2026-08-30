<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipement extends Model
{
    use HasFactory;

    protected $fillable = ['reference', 'marque', 'modele', 'statut_id', 'image'];

    protected $guarded = ['id'];

    public function locations()
    {
        return $this->hasMany(Location::class);
    }

    public function appareil()
    {
        return $this->hasOne(Appareil::class);
    }

    public function alertes()
    {
        return $this->hasMany(Alerte::class);
    }

    public function statut()
    {
        return $this->belongsTo(Statut::class);
    }

    public function dernierePositionGps()
    {
        return $this->hasOneThrough(
            PositionGps::class,
            Appareil::class,
            'equipement_id',
            'appareil_id',
            'id',
            'id'
        )
            ->latestOfMany('date_heure')
            ->select('position_gps.*')
            ->selectRaw('
            ST_Y(position_gps.coordonnees) AS latitude,
            ST_X(position_gps.coordonnees) AS longitude
        ');
    }
}
