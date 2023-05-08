import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VsButtonComponent } from './vs-button/vs-button.component';

@NgModule({
  declarations: [
    VsButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VsButtonComponent,
  ]
})
export class VsAngularComponentsWithTailwindsModule { }
