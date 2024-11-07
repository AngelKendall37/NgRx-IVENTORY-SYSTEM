import { createReducer, on } from '@ngrx/store';
import * as InventoryActions from '../actions/inventory.actions';

export interface InventoryState {
  products: any[];
  transactions: any[];
  loading: boolean;
  error: any;
}

const initialState: InventoryState = {
  products: [],
  transactions: [],
  loading: false,
  error: null,
};

export const inventoryReducer = createReducer(
  initialState,
  on(InventoryActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(InventoryActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(InventoryActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(InventoryActions.loadTransactions, (state) => ({
    ...state,
    loading: true,
  })),
  on(InventoryActions.loadTransactionsSuccess, (state, { transactions }) => ({
    ...state,
    transactions,
    loading: false,
  })),
  on(InventoryActions.loadTransactionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
