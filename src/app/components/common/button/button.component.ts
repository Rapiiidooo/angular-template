import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() loading: boolean | null = false;
	@Input() disabled: boolean = false;
	@Input() type: string = 'button';
	@Input() text: string = '';
}
