import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '../../stores';
import { LoginModule } from '../../stores/login/login.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';

@NgModule({
	imports: [
		HttpClientModule,
		StoreModule.forRoot({}, {}),
		StoreModule.forRoot(reducers, {
			metaReducers,
		}),
		EffectsModule.forRoot(),
		StoreDevtoolsModule.instrument({
			maxAge: 15,
			logOnly: environment.production,
			autoPause: true,
		}),
		LoginModule,
	],
})
export class StoresModule {}
