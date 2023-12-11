<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Season;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\quizevent>
 */
class QuizEventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quiz_event_id'=>fake()->randomDigit,
            'season_id'=>Season::factory(),
            'quiz_date' => fake()->dateTimeBetween('-1 month', 'now'),
            'topic' => fake()->sentence(),
        ];
    }
}
