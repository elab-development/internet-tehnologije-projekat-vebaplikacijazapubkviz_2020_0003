<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scoreboard extends Model
{
    use HasFactory;

    protected $fillable=[
        'correct_total',
        'incorrect_total',
        'index'
    ];

    public function season(){
        return $this->belongsTo(Season::class);
    }
    public function team(){
        return $this->belongsTo(Team::class);
    }

}
