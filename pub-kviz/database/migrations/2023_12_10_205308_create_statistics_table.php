<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('statistics', function (Blueprint $table) {
            $table->unsignedBigInteger('season_id');
            $table->unsignedBigInteger('quiz_event_id');
            $table->unsignedBigInteger('team_id');

            $table->integer('correct');
            $table->integer('incorrect');

            $table->foreign('season_id')->references('season_id')->on('quiz_events');
            $table->foreign('quiz_event_id')->references('quiz_event_id')->on('quiz_events');
            $table->foreign('team_id')->references('id')->on('teams');

            $table->primary(['season_id','quiz_event_id','team_id']);
            $table->timestamps();


        });

        DB::statement('ALTER TABLE statistics ADD CONSTRAINT check_number_of_questions CHECK (correct+incorrect=15);');
        DB::statement('UPDATE scoreboards sc INNER JOIN statistics st ON (sc.season_id=st.season_id) SET sc.correct_total=sc.correct_total+st.correct,sc.incorrect_total=sc.incorrect_total+st.incorrect,sc.index=sc.correct_total-sc.incorrect_total');
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistics');
    }
};
