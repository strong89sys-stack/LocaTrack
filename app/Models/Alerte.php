<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Alerte extends Model
{
    use HasFactory;
    protected $fillable = ['type', 'gravite', 'resolue', 'date_resolution', 'equipement_id'];
    protected $guarded = ['id'];

    protected function casts(): array{
        return [
            'resolue'=> 'boolean',
            'date_resolution' => 'date'
        ];
    }

    public function equipement(){
        return $this->belongsTo(Equipement::class);
    }
}
