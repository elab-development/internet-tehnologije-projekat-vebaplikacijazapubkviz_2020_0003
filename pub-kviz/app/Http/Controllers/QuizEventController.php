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
