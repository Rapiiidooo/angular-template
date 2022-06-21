import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostLoginRequest, PostLoginResponse } from '../../models/login';
import { environment } from '../../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private http: HttpClient) {}

	postLogin(model: PostLoginRequest) {
		return this.http.post<PostLoginResponse>(`${environment.prefixApiUrl}/api/auth/login/`, {
			email: model.email,
			password: model.password,
		});
	}
}
