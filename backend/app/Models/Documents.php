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
        'work_type_id' ,
        'status',
        'bill_send' ,
        'bill_received' ,
        'actual_cost' ,
        'profite' ,
        'file_back',
        'file'
    ];

    protected $casts = [
        
    ];

    public static array $rules = [
        
    ];

    public function userJoin()
    {
        return $this->hasOne(User::class , 'id','user_id');
    }

    public function businessTypesJoin()
    {
        return $this->hasOne(BusinessTypes::class ,'id', 'business_types_id');
    }   
    
    public function WorkTypesJoin()
    {
        return $this->hasOne(WorkType::class ,'id', 'work_type_id');
    }       
    
}
