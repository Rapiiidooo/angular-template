import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTooltipModule,
		MatBadgeModule,
	],
	exports: [
		CommonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTooltipModule,
		MatBadgeModule,
	],
})
export class MaterialModule {}
