<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\QuizEvent;

class SeasonQuizEventController extends Controller
{
    //

    public function index($season_id)
    {
    $quiz_events=QuizEvent::get()->where('season_id',$season_id);
    if(is_null($quiz_events)){
        return response()->json('Data not found',404);
    }
    return response()->json($quiz_events);


    }

    
}
