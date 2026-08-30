<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ZoneGeofence extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'centre', 'rayon', 'tolerance'];

    protected $guarded = ['id'];

    protected $casts = [
        'rayon' => 'decimal:2',
        'tolerance' => 'decimal:2',
    ];

    public function locations()
    {
        return $this->hasMany(Location::class);
    }
}
