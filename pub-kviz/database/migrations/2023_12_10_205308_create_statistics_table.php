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
            $table->unsignedBigInteger('user_id');

            $table->integer('correct');
            $table->integer('incorrect');

            $table->foreign('season_id')->references('season_id')->on('quiz_events')->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');;
            $table->foreign('quiz_event_id')->references('quiz_event_id')->on('quiz_events')->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');;
            $table->foreign('user_id')->references('id')->on('teams')->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');;

            $table->primary(['season_id','quiz_event_id','user_id']);
            $table->timestamps();
            
            
        });
        
        DB::statement('UPDATE scoreboards sc INNER JOIN `statistics` st ON (sc.season_id=st.season_id) SET sc.correct_total=sc.correct_total+st.correct,sc.incorrect_total=sc.incorrect_total+st.incorrect,sc.index=sc.correct_total-sc.incorrect_total');
        DB::statement('ALTER TABLE statistics ADD CONSTRAINT check_number_of_questions CHECK (correct+incorrect=15);');
        
        DB::unprepared('
        CREATE TRIGGER trg_update_scoreboard
        AFTER INSERT ON statistics
        FOR EACH ROW
        BEGIN
            UPDATE scoreboards sc
            SET sc.correct_total = sc.correct_total + NEW.correct, sc.incorrect_total = sc.incorrect_total + NEW.incorrect, sc.index = sc.correct_total - sc.incorrect_total
            WHERE sc.season_id = NEW.season_id AND sc.user_id = NEW.user_id;
        END;
        '); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistics');
    }
};
