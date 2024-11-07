import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../service/product.service';
import * as InventoryActions from '../actions/inventory.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class InventoryEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => InventoryActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(InventoryActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InventoryActions.loadTransactions),
      mergeMap(() =>
        this.productService.getTransactions().pipe(
          map((transactions) =>
            InventoryActions.loadTransactionsSuccess({ transactions })
          ),
          catchError((error) =>
            of(InventoryActions.loadTransactionsFailure({ error }))
          )
        )
      )
    )
  );
}
