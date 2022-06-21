import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { loginResponse } from './responses/login';

const dictionaryUrls = {
	'/api/auth/login/': loginResponse,
};

@Injectable()
export class MockInterceptor implements MockInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (environment.fakeBackend) {
			// Remove the prefix of the url
			const key = request.url.replace(environment.prefixApiUrl, '');

			// Try to find a fake response in our dictionary
			if (key in dictionaryUrls) {
				const value = dictionaryUrls[key as keyof typeof dictionaryUrls];
				// Send it with a small delay to simulate the loading part
				return of(new HttpResponse({ status: 200, body: value })).pipe(delay(250));
			}
		}
		return next.handle(request);
	}
}
