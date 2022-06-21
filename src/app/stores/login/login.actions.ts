import { createAction, props } from '@ngrx/store';
import { PostLoginRequest } from '../../common/models/login';

export const aLogin = createAction('[Login]', props<{ model: PostLoginRequest }>());

export const aLoginSuccess = createAction('[Login] Success');

export const aLoginErrors = createAction('[Login] Errors', props<{ errors: any }>());

export const aLogout = createAction('[Login] Logout');
