<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BusinessTypesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'b_name' => $this->b_name,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
