<?php

namespace App\Http\Controllers;

use App\Models\Season;
use Illuminate\Http\Request;
use App\Http\Resources\SeasonResource;
class SeasonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Season::all();
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
    public function show($season_id)
    {
        //
        return new SeasonResource(Season::find($season_id));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Season $season)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Season $season)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($season_id)
    {
        //
        $season = Season::find($season_id);
 
        if (is_null($season)) {
           
            return response()->json('Data not found', 404);
           
        }
            $season->delete();
            return response()->json($season);

    }
}
