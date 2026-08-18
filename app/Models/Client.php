<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory;
    protected $fillable = ['nom', 'prenoms', 'telephone', 'email', 'adresse'];
    protected $guarded = ['id'];

    public function locations(){
        return $this->hasMany(Location::class);
    }
}
