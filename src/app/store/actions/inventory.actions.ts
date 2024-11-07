import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Inventory] Load Products');
export const loadProductsSuccess = createAction(
  '[Inventory] Load Products Success',
  props<{ products: any[] }>()
);
export const loadProductsFailure = createAction(
  '[Inventory] Load Products Failure',
  props<{ error: any }>()
);

export const loadTransactions = createAction('[Inventory] Load Transactions');
export const loadTransactionsSuccess = createAction(
  '[Inventory] Load Transactions Success',
  props<{ transactions: any[] }>()
);
export const loadTransactionsFailure = createAction(
  '[Inventory] Load Transactions Failure',
  props<{ error: any }>()
);
