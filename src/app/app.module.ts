import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './common/modules/routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoresModule } from './common/modules/stores.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from './common/services/interceptors/mock.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { ButtonComponent } from './components/common/button/button.component';
import { ErrorInterceptor } from './common/services/interceptors/error.interceptor';
import { MaterialModule } from './common/modules/material.module';

@NgModule({
	declarations: [AppComponent, LoginComponent, DashboardComponent, ButtonComponent],
	imports: [
		BrowserModule,
		RoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		StoresModule,
		ReactiveFormsModule,
		EffectsModule.forRoot([]),
		JwtModule.forRoot({
			config: {
				tokenGetter: () => localStorage.getItem('access_token'),
				allowedDomains: ['*'],
				disallowedRoutes: [],
			},
		}),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MockInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
