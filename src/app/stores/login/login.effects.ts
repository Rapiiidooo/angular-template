import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as LoginActions from './login.actions';
import { LoginService } from '../../common/services/login/login.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Action } from '@ngrx/store';

@Injectable()
export class LoginEffects implements OnInitEffects {
	aLogin$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LoginActions.aLogin),
			mergeMap((action) =>
				this.loginService.postLogin(action.model).pipe(
					map((response) => {
						localStorage.setItem('access_token', response.access);
						localStorage.setItem('refresh_token', response.refresh);

						this.router.navigate(['/dashboard']).then();
						return LoginActions.aLoginSuccess();
					}),
					catchError((errors) => of(LoginActions.aLoginErrors({ errors })))
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private loginService: LoginService,
		private router: Router,
		private jwtHelper: JwtHelperService
	) {}

	ngrxOnInitEffects(): Action {
		/* This method is called after the effect has been added  */
		const token = localStorage.getItem('access_token');
		if (
			!token ||
			token === '' ||
			token === 'null' ||
			token === 'undefined' ||
			this.jwtHelper.isTokenExpired(token)
		) {
			return { type: 'Login Initialized' };
		}
		return LoginActions.aLoginSuccess();
	}
}
