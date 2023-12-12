<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Season;

class SeasonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap="season";
 
    public function toArray(Request $request): array
    {
        return[
            'id'=>$this->resource->id,
            'name'=>$this->resource->name,
           
        ];
 
    }
}
