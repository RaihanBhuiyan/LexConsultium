<?php

namespace App\Repositories;

use App\Models\AccountsLedger;
use App\Repositories\BaseRepository;

class AccountsLedgerRepository extends BaseRepository
{
    protected $fieldSearchable = [
        
    ];

    public function getFieldsSearchable(): array
    {
        return $this->fieldSearchable;
    }

    public function model(): string
    {
        return AccountsLedger::class;
    }
}
