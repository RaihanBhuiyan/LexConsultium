<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateAccountsLedgerAPIRequest;
use App\Http\Requests\API\UpdateAccountsLedgerAPIRequest;
use App\Models\AccountsLedger;
use App\Repositories\AccountsLedgerRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;

/**
 * Class AccountsLedgerAPIController
 */
class AccountsLedgerAPIController extends AppBaseController
{
    private AccountsLedgerRepository $accountsLedgerRepository;

    public function __construct(AccountsLedgerRepository $accountsLedgerRepo)
    {
        $this->accountsLedgerRepository = $accountsLedgerRepo;
    }

    /**
     * Display a listing of the AccountsLedgers.
     * GET|HEAD /accounts-ledgers
     */
    public function index(Request $request): JsonResponse
    {
        $accountsLedgers = $this->accountsLedgerRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );

        return $this->sendResponse($accountsLedgers->toArray(), 'Accounts Ledgers retrieved successfully');
    }

    /**
     * Store a newly created AccountsLedger in storage.
     * POST /accounts-ledgers
     */
    public function store(CreateAccountsLedgerAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        $accountsLedger = $this->accountsLedgerRepository->create($input);

        return $this->sendResponse($accountsLedger->toArray(), 'Accounts Ledger saved successfully');
    }

    /**
     * Display the specified AccountsLedger.
     * GET|HEAD /accounts-ledgers/{id}
     */
    public function show($id): JsonResponse
    {
        /** @var AccountsLedger $accountsLedger */
        $accountsLedger = $this->accountsLedgerRepository->find($id);

        if (empty($accountsLedger)) {
            return $this->sendError('Accounts Ledger not found');
        }

        return $this->sendResponse($accountsLedger->toArray(), 'Accounts Ledger retrieved successfully');
    }

    /**
     * Update the specified AccountsLedger in storage.
     * PUT/PATCH /accounts-ledgers/{id}
     */
    public function update($id, UpdateAccountsLedgerAPIRequest $request): JsonResponse
    {
        $input = $request->all();

        /** @var AccountsLedger $accountsLedger */
        $accountsLedger = $this->accountsLedgerRepository->find($id);

        if (empty($accountsLedger)) {
            return $this->sendError('Accounts Ledger not found');
        }

        $accountsLedger = $this->accountsLedgerRepository->update($input, $id);

        return $this->sendResponse($accountsLedger->toArray(), 'AccountsLedger updated successfully');
    }

    /**
     * Remove the specified AccountsLedger from storage.
     * DELETE /accounts-ledgers/{id}
     *
     * @throws \Exception
     */
    public function destroy($id): JsonResponse
    {
        /** @var AccountsLedger $accountsLedger */
        $accountsLedger = $this->accountsLedgerRepository->find($id);

        if (empty($accountsLedger)) {
            return $this->sendError('Accounts Ledger not found');
        }

        $accountsLedger->delete();

        return $this->sendSuccess('Accounts Ledger deleted successfully');
    }
}
