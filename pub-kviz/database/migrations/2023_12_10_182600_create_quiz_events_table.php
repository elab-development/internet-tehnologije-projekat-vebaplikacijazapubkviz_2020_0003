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
        Schema::create('quiz_events', function (Blueprint $table) {
            $table->unsignedBigInteger('quiz_event_id');
            $table->unsignedBigInteger('season_id');

            $table->dateTime('quiz_date');
            $table->string('subject');
            
            $table->foreign('season_id')->references('id')->on('seasons')->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');;
            $table->primary(['quiz_event_id','season_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz_events');
    }
};
