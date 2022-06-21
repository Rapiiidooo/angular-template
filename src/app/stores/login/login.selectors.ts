import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as login from './login.reducer';

export const selectLogin = createFeatureSelector<login.LoginState>(login.loginFeatureKey);

export const selectLoginUsername = createSelector(selectLogin, (state) => state.username);

export const selectLoginLogged = createSelector(selectLogin, (state) => state.logged);

export const selectLoginLoading = createSelector(selectLogin, (state) => state.loading);

export const selectLoginErrors = createSelector(selectLogin, (state) => state.errors);
