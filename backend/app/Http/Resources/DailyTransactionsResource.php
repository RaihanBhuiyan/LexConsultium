<?php

namespace App\Http\Resources;

use App\Models\AccountsLedger;
use Illuminate\Http\Resources\Json\JsonResource;

class DailyTransactionsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'accounts_ledger_id' => $this->accounts_ledger_id,
            'date' => date('Y-m-d',strtotime($this->date)),
            'amount' => $this->amount,
            'ledger' => new LedgerResource(AccountsLedger::find($this->id)),       
            'transaction_type' => $this->transaction_type,       
            'remarks' => $this->remarks,       
        ];
    }
}
