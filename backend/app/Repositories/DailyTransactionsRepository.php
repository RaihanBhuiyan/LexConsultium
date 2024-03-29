<?php

namespace App\Repositories;

use App\Models\DailyTransactions;
use App\Repositories\BaseRepository;

class DailyTransactionsRepository extends BaseRepository
{
    protected $fieldSearchable = [
        'date',
        'ledger',
        'amount',
        'transaction_type',
        'remarks'
    ];

    public function getFieldsSearchable(): array
    {
        return $this->fieldSearchable;
    }

    public function model(): string
    {
        return DailyTransactions::class;
    }
}
