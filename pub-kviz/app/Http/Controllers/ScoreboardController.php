<?php

namespace App\Http\Controllers;

use App\Models\Scoreboard;
use Illuminate\Http\Request;
use DB;

class ScoreboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $result=DB::select("SELECT se.name AS season,u.name AS team, s.index
        FROM users U
        JOIN scoreboards S ON(u.id=s.user_id)
        JOIN seasons SE ON(se.id=s.season_id)");
        return $result;

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        DB::statement('
        UPDATE scoreboards sc
        INNER JOIN season s ON sc.season_id=s.id
        INNER JOIN user u ON sc.user_id=s.id
        INNER JOIN statistics st ON sc.season_id = st.season_id AND sc.user_id = st.user_id
        SET sc.correct_total = sc.correct_total + st.correct, sc.incorrect_total = sc.incorrect_total + st.incorrect
        ');
 
        DB::statement("UPDATE scoreboards SET `index`=correct_total-incorrect_total" );
       
        return response()->json(['message'=>'Successfully updated!']);
   
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
    public function show(Scoreboard $scoreboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Scoreboard $scoreboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        //
        //
        DB::statement('
        UPDATE scoreboards sc
        INNER JOIN statistics st ON sc.season_id = st.season_id AND sc.user_id = st.user_id
        SET sc.correct_total = sc.correct_total + st.correct, sc.incorrect_total = sc.incorrect_total + st.incorrect
        ');

        DB::statement("UPDATE scoreboards SET `index`=correct_total-incorrect_total" );
        
        return response()->json(['message'=>'Successfully updated!']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Scoreboard $scoreboard)
    {
        //
    }
}
