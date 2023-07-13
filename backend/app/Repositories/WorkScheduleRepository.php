<?php

namespace App\Repositories;

use App\Models\WorkSchedule;
use App\Repositories\BaseRepository;

class WorkScheduleRepository extends BaseRepository
{
    protected $fieldSearchable = [
        'date',
        'user_id',
        'details'
    ];

    public function getFieldsSearchable(): array
    {
        return $this->fieldSearchable;
    }

    public function model(): string
    {
        return WorkSchedule::class;
    }
}
