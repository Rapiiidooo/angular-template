import { Component } from '@angular/core';
import { selectLoginUsername } from '../../stores/login/login.selectors';
import { Store } from '@ngrx/store';
import { aLogout } from '../../stores/login/login.actions';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
	selectLoginUsername$ = this.store.select(selectLoginUsername);

	constructor(private readonly store: Store) {}

	logout() {
		this.store.dispatch(aLogout());
	}
}
