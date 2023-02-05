<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    public $table = 'employees';

    public $fillable = [
        'name',
        'phone',
        'designation',
        'type'
    ];

    protected $casts = [
        
    ];

    public static array $rules = [];

    
}
