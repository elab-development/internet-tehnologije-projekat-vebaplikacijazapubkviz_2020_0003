<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;

    protected $fillable=[
        'correct',
        'incorrect'

    ];

    public function quiz_event(){
        return $this->belongsTo(QuizEvent::class);
    }

    public function team(){
        return $this->belongsTo(Team::class);
    }


}
