<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Team;
use \App\Models\Season;
use \App\Models\QuizEvent;
use \App\Models\Statistic;
use \App\Models\Scoreboard;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {  
        //Season::truncate();
        // Team::truncate();
        //QuizEvent::truncate();
        // Scoreboard::truncate();
        // Statistic::truncate();
 
        $season = Season::factory()->create();
        $team = Team::factory()->create();
        $quiz_event = QuizEvent::factory()->create();
       
        Scoreboard::create([
            'season_id' => $season->id,
            'team_id' => $team->id,
            'correct_total' => 0,
            'incorrect_total' => 0,
            'index' => 0,
        ]);
 
        Statistic::create([
            'quiz_event_id' => $quiz_event->quiz_event_id,
            'season_id'=>$quiz_event->season_id,
            'team_id' => $team->id,
            'correct' => 7,
            'incorrect' => 8,
        ]);
    }
}
