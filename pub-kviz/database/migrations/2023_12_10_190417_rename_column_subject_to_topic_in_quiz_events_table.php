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
        Schema::table('quiz_events', function (Blueprint $table) {
            //
            $table->renameColumn('subject', 'topic');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('quiz_events', function (Blueprint $table) {
            //
            $table->renameColumn('topic', 'subject');
        });
    }
};
