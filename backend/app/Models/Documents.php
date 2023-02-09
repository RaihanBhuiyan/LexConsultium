<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    public $table = 'documents';

    public $fillable = [
        'reference' ,
        'e_date',
        'business_types_id',
        'bank' ,
        'b_name' ,
        'user_id' ,
        'r_date' ,
        'd_date',
        'collect_by' ,
        'work_type' ,
        'status',
        'bill_send' ,
        'bill_received' ,
        'actual_cost' ,
        'profite' ,
        'file_back'   
    ];

    protected $casts = [
        
    ];

    public static array $rules = [
        
    ];

    
}
