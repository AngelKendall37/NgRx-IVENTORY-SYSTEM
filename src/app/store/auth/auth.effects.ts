import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../service/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((response) =>
            AuthActions.loginSuccess({
              user: response.user,
              token: response.token,
            })
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      mergeMap((action) =>
        this.authService
          .register({
            name: action.name,
            email: action.email,
            password: action.password,
          })
          .pipe(
            map((response) =>
              AuthActions.registerSuccess({
                user: response.user,
                token: response.token,
              })
            ),
            catchError((error) => of(AuthActions.registerFailure({ error })))
          )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
