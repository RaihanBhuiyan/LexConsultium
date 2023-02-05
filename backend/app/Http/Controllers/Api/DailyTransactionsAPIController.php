<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateDailyTransactionsAPIRequest;
use App\Http\Requests\API\UpdateDailyTransactionsAPIRequest;
use App\Models\DailyTransactions;
use App\Repositories\DailyTransactionsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use App\Http\Resources\DailyTransactionsResource;

/**
 * Class DailyTransactionsAPIController
 */
class DailyTransactionsAPIController extends AppBaseController
{
    private DailyTransactionsRepository $dailyTransactionsRepository;

    public function __construct(DailyTransactionsRepository $dailyTransactionsRepo)
    {
        $this->dailyTransactionsRepository = $dailyTransactionsRepo;
    }

    /**
     * Display a listing of the DailyTransactions.
     * GET|HEAD /daily-transactions
     */
    public function index(Request $request): JsonResponse
    {
        $dailyTransactions = $this->dailyTransactionsRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );
        $dailyTransactions =  DailyTransactionsResource::collection($dailyTransactions);
        return $this->sendResponse($dailyTransactions, 'Daily Transactions retrieved successfully');
    }

    /**
     * Store a newly created DailyTransactions in storage.
     * POST /daily-transactions
     */
    public function store(CreateDailyTransactionsAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        $dailyTransactions = $this->dailyTransactionsRepository->create($input);

        return $this->sendResponse($dailyTransactions->toArray(), 'Daily Transactions saved successfully');
    }

    /**
     * Display the specified DailyTransactions.
     * GET|HEAD /daily-transactions/{id}
     */
    public function show($id): JsonResponse
    {
        /** @var DailyTransactions $dailyTransactions */
        $dailyTransactions = $this->dailyTransactionsRepository->find($id);

        if (empty($dailyTransactions)) {
            return $this->sendError('Daily Transactions not found');
        }

        return $this->sendResponse($dailyTransactions->toArray(), 'Daily Transactions retrieved successfully');
    }

    /**
     * Update the specified DailyTransactions in storage.
     * PUT/PATCH /daily-transactions/{id}
     */
    public function update($id, UpdateDailyTransactionsAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        /** @var DailyTransactions $dailyTransactions */
        $dailyTransactions = $this->dailyTransactionsRepository->find($id);

        if (empty($dailyTransactions)) {
            return $this->sendError('Daily Transactions not found');
        }

        $dailyTransactions = $this->dailyTransactionsRepository->update($input, $id);

        return $this->sendResponse($dailyTransactions->toArray(), 'DailyTransactions updated successfully');
    }

    /**
     * Remove the specified DailyTransactions from storage.
     * DELETE /daily-transactions/{id}
     *
     * @throws \Exception
     */
    public function destroy($id): JsonResponse
    {
        /** @var DailyTransactions $dailyTransactions */
        $dailyTransactions = $this->dailyTransactionsRepository->find($id);

        if (empty($dailyTransactions)) {
            return $this->sendError('Daily Transactions not found');
        }

        $dailyTransactions->delete();

        return $this->sendSuccess('Daily Transactions deleted successfully');
    }
}
