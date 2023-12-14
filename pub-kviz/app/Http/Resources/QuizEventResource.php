<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class QuizEventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap='quiz_event';

    public function toArray(Request $request): array
    {
        return[
            'season_id'=>$this->resource->season_id,
            'quiz_event_id'=>$this->resource->quiz_event_id,
            'topic'=>$this->resource_topic
        ];

    }
}
