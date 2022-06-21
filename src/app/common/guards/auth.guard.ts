import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectLoginLogged } from '../../stores/login/login.selectors';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private store: Store, public router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.store.pipe(
			select(selectLoginLogged),
			map((logged) => {
				if (!logged) {
					this.router.navigate(['/login']).then();
					return false;
				}
				return true;
			})
		);
	}
}
