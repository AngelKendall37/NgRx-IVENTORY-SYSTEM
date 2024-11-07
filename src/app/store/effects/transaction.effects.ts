// transaction.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionService } from '../../service/transaction.service';
import * as TransactionActions from '../actions/transaction.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TransactionEffects {
  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.loadTransactions),
      mergeMap(() =>
        this.transactionService.getTransactions().pipe(
          map((transactions) =>
            TransactionActions.loadTransactionsSuccess({ transactions })
          ),
          catchError((error) =>
            of(TransactionActions.loadTransactionsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private transactionService: TransactionService
  ) {}
}
