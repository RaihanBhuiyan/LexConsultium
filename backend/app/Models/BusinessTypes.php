<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Model;



/**
 * Class BusinessTypes
 * @package App\Models
 * @version February 5, 2023, 9:04 pm +06
 *
 * @property sting $b_name
 */
class BusinessTypes extends Model
{


    public $table = 'business_types';
    



    public $fillable = [
        'b_name'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'b_name' => 'required'
    ];

    
}
