<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateWorkScheduleAPIRequest;
use App\Http\Requests\API\UpdateWorkScheduleAPIRequest;
use App\Models\WorkSchedule;
use App\Repositories\WorkScheduleRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use App\Http\Resources\WorkScheduleResource;

/**
 * Class WorkScheduleAPIController
 */
class WorkScheduleAPIController extends AppBaseController
{
    private WorkScheduleRepository $workScheduleRepository;

    public function __construct(WorkScheduleRepository $workScheduleRepo)
    {
        $this->workScheduleRepository = $workScheduleRepo;
    }

    /**
     * Display a listing of the WorkSchedules.
     * GET|HEAD /work-schedules
     */
    public function index(Request $request): JsonResponse
    {
        $workSchedules = $this->workScheduleRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );
        return $this->sendResponse(WorkScheduleResource::collection($workSchedules), 'Work Schedules retrieved successfully');
    }

    /**
     * Store a newly created WorkSchedule in storage.
     * POST /work-schedules
     */
    public function store(CreateWorkScheduleAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        $workSchedule = $this->workScheduleRepository->create($input);

        return $this->sendResponse($workSchedule->toArray(), 'Work Schedule saved successfully');
    }

    /**
     * Display the specified WorkSchedule.
     * GET|HEAD /work-schedules/{id}
     */
    public function show($id): JsonResponse
    {
        /** @var WorkSchedule $workSchedule */
        $workSchedule = $this->workScheduleRepository->find($id);

        if (empty($workSchedule)) {
            return $this->sendError('Work Schedule not found');
        }

        return $this->sendResponse($workSchedule->toArray(), 'Work Schedule retrieved successfully');
    }

    /**
     * Update the specified WorkSchedule in storage.
     * PUT/PATCH /work-schedules/{id}
     */
    public function update($id, UpdateWorkScheduleAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        /** @var WorkSchedule $workSchedule */
        $workSchedule = $this->workScheduleRepository->find($id);

        if (empty($workSchedule)) {
            return $this->sendError('Work Schedule not found');
        }

        $workSchedule = $this->workScheduleRepository->update($input, $id);

        return $this->sendResponse($workSchedule->toArray(), 'WorkSchedule updated successfully');
    }

    /**
     * Remove the specified WorkSchedule from storage.
     * DELETE /work-schedules/{id}
     *
     * @throws \Exception
     */
    public function destroy($id): JsonResponse
    {
        /** @var WorkSchedule $workSchedule */
        $workSchedule = $this->workScheduleRepository->find($id);

        if (empty($workSchedule)) {
            return $this->sendError('Work Schedule not found');
        }

        $workSchedule->delete();

        return $this->sendSuccess('Work Schedule deleted successfully');
    }
}
