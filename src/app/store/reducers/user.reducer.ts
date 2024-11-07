import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../../models/user/user.module';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UserActions.registerUser, (state) => ({ ...state, loading: true })),
  on(UserActions.registerUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  on(UserActions.registerUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
