import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { NotAuthGuard } from '../guards/not-auth.guard';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/login',
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [NotAuthGuard],
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard],
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class RoutingModule {}
