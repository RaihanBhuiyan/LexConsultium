<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateWorkTypeAPIRequest;
use App\Http\Requests\API\UpdateWorkTypeAPIRequest;
use App\Models\WorkType;
use App\Repositories\WorkTypeRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;

/**
 * Class WorkTypeAPIController
 */
class WorkTypeAPIController extends AppBaseController
{
    private WorkTypeRepository $workTypeRepository;

    public function __construct(WorkTypeRepository $workTypeRepo)
    {
        $this->workTypeRepository = $workTypeRepo;
    }

    /**
     * Display a listing of the WorkTypes.
     * GET|HEAD /work-types
     */
    public function index(Request $request): JsonResponse
    {
        $workTypes = $this->workTypeRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );

        return $this->sendResponse($workTypes->toArray(), 'Work Types retrieved successfully');
    }

    /**
     * Store a newly created WorkType in storage.
     * POST /work-types
     */
    public function store(CreateWorkTypeAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        $workType = $this->workTypeRepository->create($input);

        return $this->sendResponse($workType->toArray(), 'Work Type saved successfully');
    }

    /**
     * Display the specified WorkType.
     * GET|HEAD /work-types/{id}
     */
    public function show($id): JsonResponse
    {
        /** @var WorkType $workType */
        $workType = $this->workTypeRepository->find($id);

        if (empty($workType)) {
            return $this->sendError('Work Type not found');
        }

        return $this->sendResponse($workType->toArray(), 'Work Type retrieved successfully');
    }

    /**
     * Update the specified WorkType in storage.
     * PUT/PATCH /work-types/{id}
     */
    public function update($id, UpdateWorkTypeAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        /** @var WorkType $workType */
        $workType = $this->workTypeRepository->find($id);

        if (empty($workType)) {
            return $this->sendError('Work Type not found');
        }

        $workType = $this->workTypeRepository->update($input, $id);

        return $this->sendResponse($workType->toArray(), 'WorkType updated successfully');
    }

    /**
     * Remove the specified WorkType from storage.
     * DELETE /work-types/{id}
     *
     * @throws \Exception
     */
    public function destroy($id): JsonResponse
    {
        /** @var WorkType $workType */
        $workType = $this->workTypeRepository->find($id);

        if (empty($workType)) {
            return $this->sendError('Work Type not found');
        }

        $workType->delete();

        return $this->sendSuccess('Work Type deleted successfully');
    }
}
