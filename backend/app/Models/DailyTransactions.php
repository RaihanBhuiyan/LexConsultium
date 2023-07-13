<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DailyTransactions extends Model
{
    public $table = 'daily_transactions';

    public $fillable = [
        'date',
        'accounts_ledger_id',
        'amount',
        'transaction_type',
        'remarks',
    ];

    protected $casts = [
        'date' => 'date',
        'amount' => 'float'
    ];

    public static array $rules = [
        
    ];

    
}
