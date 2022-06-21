import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as login from './login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './login.effects';

@NgModule({
	imports: [
		StoreModule.forFeature(login.loginFeatureKey, login.loginReducer),
		EffectsModule.forFeature([LoginEffects]),
	],
})
export class LoginModule {}
