<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\QuizEvent;
use DateTime;

use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Components\Event;

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

    
    public function export(Request $request){
        $filename="kvizDogadjaj.ics";
        $s_id=$request->season_id;
        $q_id=$request->quiz_event_id;
        $quiz_event=QuizEvent::get()->where('season_id',$s_id)->where('quiz_event_id',$q_id)->first();
        
           $res= Calendar::create('Quiz Event')
            ->event(Event::create($quiz_event->topic)
            ->startsAt(new DateTime(strtotime($quiz_event->quiz_date)))
            ->endsAt(new DateTime(strtotime($quiz_event->quiz_date)))
            )
            ->get();
            file_put_contents($filename, "\xEF\xBB\xBF".  $res);
         return $res;
    }
}
