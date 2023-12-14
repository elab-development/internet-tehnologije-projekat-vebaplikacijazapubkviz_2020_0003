<?php

namespace App\Http\Controllers;

use App\Models\Season;
use App\Models\QuizEvent;
use Illuminate\Http\Request;
use \App\Http\Resources\QuizEventResource;

class QuizEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return QuizEvent::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(QuizEvent $quizEvent)
    {
        //
        return new QuizEventResource($quizEvent);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request,$topic)
    {
        //
        $seasonsNames=array_values((array)Season::pluck('name'));
        $quizEventTopics=array_values((array)QuizEvent::pluck('topic'));

        if(!in_array($request->season,$seasonsNames)){
            return response()->json('Season not found',404);
        }
        if(!in_array($topic,$quizEventTopics)){
            return response()->json('Quiz event not found',404);
        }


        $season=Season::where('name',$request->season)->get()->first();

        $quiz_event=QuizEvent::where('season_id','=',$season->id)->where('quiz_event_id','=',$quiz_event_id);
        $quiz_event->topic=$request->topic;

        $quiz_event->save();

        return response()->json([
            'message'=>'Quiz event updated successfully',
            'quiz_event'=>new QuizEventResource($quiz_event),
        ]
        );


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuizEvent $quizEvent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuizEvent $quizEvent)
    {
        //
    }
}
