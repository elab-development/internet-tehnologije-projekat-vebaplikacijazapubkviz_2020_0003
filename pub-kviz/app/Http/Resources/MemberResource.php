<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap="member";

    public function toArray(Request $request): array
    {
        return[
            'id'=>$this->resource->id,
            'first_name'=>$this->resource->first_name,
            'last_name'=>$this->resource->last_name,
            'user_id'=>new UserResource($this->user)
        ];
    }
}
