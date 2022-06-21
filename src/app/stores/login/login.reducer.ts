import { createReducer, on } from '@ngrx/store';
import * as Actions from './login.actions';

export const loginFeatureKey = 'login';

export interface LoginState {
	username: string;
	logged: boolean;
	loading: boolean;
	errors?: { [id: string]: any };
}

export const initialState: LoginState = {
	username: '',
	logged: false,
	loading: false,
};

export const loginReducer = createReducer(
	initialState,
	on(Actions.aLogin, (state) => {
		return {
			...state,
			username: state.username,
			loading: true,
		};
	}),
	on(Actions.aLoginSuccess, (state) => {
		return {
			...state,
			logged: true,
			loading: false,
		};
	}),
	on(Actions.aLoginErrors, (state, action) => {
		return {
			...state,
			loading: false,
			errors: action.errors['error'],
		};
	}),
	on(Actions.aLogout, () => {
		localStorage.clear();
		window.location.reload();
		return initialState;
	})
);
