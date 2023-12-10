<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizEvent extends Model
{
    use HasFactory;

    protected $fillable=[
        'quiz_date',
        'topic'
    ];

    public function season(){
        return $this->belongsTo(Season::class);
    }

    public function statistics(){
        return $this->hasMany(Statistic::class);
    }

}
