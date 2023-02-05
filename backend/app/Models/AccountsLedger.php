<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountsLedger extends Model
{
    public $table = 'accounts_ledgers';

    public $fillable = [
        'name'
    ];

    protected $casts = [
        
    ];

    public static array $rules = [
        'name' => 'required'
    ];

    
}
