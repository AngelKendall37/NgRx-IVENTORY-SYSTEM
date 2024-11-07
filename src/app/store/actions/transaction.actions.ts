import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../models/transaction/transaction.module';

export const loadTransactions = createAction('[Transaction] Load Transactions');
export const loadTransactionsSuccess = createAction(
  '[Transaction] Load Transactions Success',
  props<{ transactions: Transaction[] }>()
);
export const loadTransactionsFailure = createAction(
  '[Transaction] Load Transactions Failure',
  props<{ error: any }>()
);
