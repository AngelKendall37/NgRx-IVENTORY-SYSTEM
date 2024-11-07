import { createReducer, on } from '@ngrx/store';
import * as TransactionActions from '../actions/transaction.actions';
import { Transaction } from '../../models/transaction/transaction.module';

export interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: any;
}

export const initialState: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
};

export const transactionReducer = createReducer(
  initialState,
  on(TransactionActions.loadTransactions, (state) => ({
    ...state,
    loading: true,
  })),
  on(TransactionActions.loadTransactionsSuccess, (state, { transactions }) => ({
    ...state,
    transactions,
    loading: false,
  })),
  on(TransactionActions.loadTransactionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
