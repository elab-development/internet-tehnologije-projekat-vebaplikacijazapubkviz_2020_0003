<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;
use \App\Models\Season;
use \App\Models\QuizEvent;
use \App\Models\Statistic;
use \App\Models\Scoreboard;
use \App\Models\Member;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {  
        //Season::truncate();
        // User::truncate();
        //QuizEvent::truncate();
        // Scoreboard::truncate();
        // Statistic::truncate();
 
        $season = Season::factory()->create();
        $user = User::factory()->create();
        $members=Member::factory(3)->create();
        $quiz_event = QuizEvent::factory()->create();
       
        Scoreboard::create([
            'season_id' => $season->id,
            'user_id' => $user->id,
            'correct_total' => 0,
            'incorrect_total' => 0,
            'index' => 0,
        ]);
 
        Statistic::create([
            'quiz_event_id' => $quiz_event->quiz_event_id,
            'season_id'=>$quiz_event->season_id,
            'user_id' => $user->id,
            'correct' => 7,
            'incorrect' => 8,
        ]);
    }
}
