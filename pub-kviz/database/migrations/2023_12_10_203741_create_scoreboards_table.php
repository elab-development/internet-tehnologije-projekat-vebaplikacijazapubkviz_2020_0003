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
        Schema::create('scoreboards', function (Blueprint $table) {
            $table->unsignedBigInteger('season_id');
            $table->unsignedBigInteger('user_id');

            $table->integer('correct_total')->default(0);
            $table->integer('incorrect_total')->default(0);
            $table->integer('index')->default(0);

            $table->foreign('season_id')->references('id')->on('seasons')->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('teams')->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');

            $table->primary(['season_id','user_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scoreboards');
    }
};
