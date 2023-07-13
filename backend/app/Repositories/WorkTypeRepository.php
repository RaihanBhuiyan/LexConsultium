<?php

namespace App\Repositories;

use App\Models\WorkType;
use App\Repositories\BaseRepository;

class WorkTypeRepository extends BaseRepository
{
    protected $fieldSearchable = [
        'date',
        'user_id', 
    ];

    public function getFieldsSearchable(): array
    {
        return $this->fieldSearchable;
    }

    public function model(): string
    {
        return WorkType::class;
    }
}
