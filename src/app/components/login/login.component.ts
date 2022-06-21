import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../../stores/login/login.actions';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { selectLoginErrors, selectLoginLoading } from '../../stores/login/login.selectors';
import { PostLoginRequest } from '../../common/models/login';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	hide = true;

	loginForm = this.fb.group({
		username: ['', [Validators.required]],
		password: ['', [Validators.required]],
	});

	loading$ = this.store.select(selectLoginLoading);
	errors$ = this.store.select(selectLoginErrors);

	constructor(private store: Store, private fb: UntypedFormBuilder) {}

	onSubmit() {
		const model: PostLoginRequest = {
			email: this.loginForm.value.username,
			password: this.loginForm.value.password,
		};

		this.store.dispatch(Actions.aLogin({ model }));
	}
}
