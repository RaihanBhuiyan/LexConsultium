<?php

namespace App\Repositories;

use App\Models\BusinessTypes;
use App\Repositories\BaseRepository;

/**
 * Class BusinessTypesRepository
 * @package App\Repositories
 * @version February 5, 2023, 9:04 pm +06
*/

class BusinessTypesRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'b_name'
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable():array
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model():string
    {
        return BusinessTypes::class;
    }
}
