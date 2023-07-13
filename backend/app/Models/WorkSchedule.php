<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkSchedule extends Model
{
    public $table = 'work_schedules';

    public $fillable = [
        'date',
        'user_id',
        'details'
    ];

    protected $casts = [
        // 'date' => 'date',
        // 'user_id' => 'integer',
        // 'details' => 'string'
    ];

    public static array $rules = [
        
    ];
    
    public function userJoin()
    {
        return $this->hasOne(User::class , 'id','user_id');
    }
    
}
