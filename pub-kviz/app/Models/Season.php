<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    use HasFactory;
    
    protected $fillable=[
        'name',
        'start_date',
        'finish_date'
    ];

    public function quiz_events(){
        return $this->hasMany(QuizEvent::class);
    }

    public function scoreboards(){
        return $this->hasMany(Scoreboard::class);
    }

}
