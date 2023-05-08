import { Component, Input } from '@angular/core';

import { Variants } from '../models';
import { tailwindcssTokens } from '../constants';

@Component({
  selector: 'vs-button',
  templateUrl: './vs-button.component.html',
  styleUrls: ['./vs-button.component.scss']
})
export class VsButtonComponent {
  @Input() type: 'button' | 'menu' | 'reset' | 'submit' = 'button';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: Variants = 'primary';
  @Input() disabled = false;
  readonly applyClassVariants = (): string => (`
    ${tailwindcssTokens.buttons[this.variant]}
    ${tailwindcssTokens.buttons.sizes[this.size]}
    ${this.disabled ? tailwindcssTokens.buttons.disabled : tailwindcssTokens.buttons.hovers[this.variant]}
  `);
}
