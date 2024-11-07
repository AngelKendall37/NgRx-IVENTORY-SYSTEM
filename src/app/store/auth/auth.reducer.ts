import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: any | null;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.registerSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    error: null,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.logout, (state) => ({ ...state, user: null, token: null }))
);
