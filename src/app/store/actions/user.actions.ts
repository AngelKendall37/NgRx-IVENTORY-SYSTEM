import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user/user.module';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const registerUser = createAction(
  '[User] Register User',
  props<{ user: User }>()
);
export const registerUserSuccess = createAction(
  '[User] Register User Success',
  props<{ user: User }>()
);
export const registerUserFailure = createAction(
  '[User] Register User Failure',
  props<{ error: any }>()
);
