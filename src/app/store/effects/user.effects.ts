// src/app/store/effects/user.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../service/user.service';
import * as UserActions from '../actions/user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.registerUser),
      mergeMap((action) =>
        this.userService.registerUser(action.user).pipe(
          map((user) => UserActions.registerUserSuccess({ user })),
          catchError((error) => of(UserActions.registerUserFailure({ error })))
        )
      )
    )
  );
}
