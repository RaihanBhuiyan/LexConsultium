<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DocumentsResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'reference' => $this->reference,
            'e_date' => $this->e_date,
            'business_types' => $this->businessTypesJoin,
            'bank' => $this->bank,
            'b_name' => $this->b_name,
            'concern_lawyer' => $this->userJoin,
            'r_date' => $this->r_date,
            'd_date' => $this->d_date,
            'collect_by' => $this->userJoin,
            'work_type' => $this->WorkTypesJoin,
            'status' => $this->status,
            'bill_send' => $this->bill_send,
            'bill_received' => $this->bill_received,
            'actual_cost' => $this->actual_cost,
            'profite' => $this->profite,
            'file_back' => $this->file_back,
        ];
    }
}