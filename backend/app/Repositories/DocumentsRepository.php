<?php

namespace App\Repositories;

use App\Models\Documents;
use App\Repositories\BaseRepository;

class DocumentsRepository extends BaseRepository
{
    protected $fieldSearchable = [
        'reference'
    ];

    public function getFieldsSearchable(): array
    {
        return $this->fieldSearchable;
    }

    public function model(): string
    {
        return Documents::class;
    }
}
