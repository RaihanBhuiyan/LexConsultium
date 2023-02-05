<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateBusinessTypesAPIRequest;
use App\Http\Requests\API\UpdateBusinessTypesAPIRequest;
use App\Models\BusinessTypes;
use App\Repositories\BusinessTypesRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use App\Http\Resources\BusinessTypesResource;
use Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
/**
 * Class BusinessTypesController
 * @package App\Http\Controllers\API
 */

class BusinessTypesAPIController extends AppBaseController
{
    /** @var  BusinessTypesRepository */
    private $businessTypesRepository;

    public function __construct(BusinessTypesRepository $businessTypesRepo)
    {
        $this->businessTypesRepository = $businessTypesRepo;
    }

    /**
     * Display a listing of the BusinessTypes.
     * GET|HEAD /businessTypes
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $businessTypes = $this->businessTypesRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );

        return $this->sendResponse(BusinessTypesResource::collection($businessTypes), 'Business Types retrieved successfully');
    }

    /**
     * Store a newly created BusinessTypes in storage.
     * POST /businessTypes
     *
     * @param CreateBusinessTypesAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateBusinessTypesAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        $businessTypes = $this->businessTypesRepository->create($input);

        return $this->sendResponse(new BusinessTypesResource($businessTypes), 'Business Types saved successfully');
    }

    /**
     * Display the specified BusinessTypes.
     * GET|HEAD /businessTypes/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var BusinessTypes $businessTypes */
        $businessTypes = $this->businessTypesRepository->find($id);

        if (empty($businessTypes)) {
            return $this->sendError('Business Types not found');
        }

        return $this->sendResponse(new BusinessTypesResource($businessTypes), 'Business Types retrieved successfully');
    }

    /**
     * Update the specified BusinessTypes in storage.
     * PUT/PATCH /businessTypes/{id}
     *
     * @param int $id
     * @param UpdateBusinessTypesAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateBusinessTypesAPIRequest $request)
    {
        $input = $request->all();

        /** @var BusinessTypes $businessTypes */
        $businessTypes = $this->businessTypesRepository->find($id);

        if (empty($businessTypes)) {
            return $this->sendError('Business Types not found');
        }

        $businessTypes = $this->businessTypesRepository->update($input, $id);

        return $this->sendResponse(new BusinessTypesResource($businessTypes), 'BusinessTypes updated successfully');
    }

    /**
     * Remove the specified BusinessTypes from storage.
     * DELETE /businessTypes/{id}
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var BusinessTypes $businessTypes */
        $businessTypes = $this->businessTypesRepository->find($id);

        if (empty($businessTypes)) {
            return $this->sendError('Business Types not found');
        }

        $businessTypes->delete();

        return $this->sendSuccess('Business Types deleted successfully');
    }
}
