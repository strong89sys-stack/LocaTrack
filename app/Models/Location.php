<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = ['client_id', 'equipement_id', 'zone_geofence_id', 'date_debut', 'date_fin', 'statut'];

    protected $guarded = ['id'];

    protected $casts = [
        'date_debut' => 'date',
        'date_fin' => 'date',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function equipement()
    {
        return $this->belongsTo(Equipement::class);
    }

    public function zoneGeofence()
    {
        return $this->belongsTo(ZoneGeofence::class);
    }
}
