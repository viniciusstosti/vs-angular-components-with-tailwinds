import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VsSrcButtonRoutingModule } from './vs-src-button-routing.module';
import { VsSrcButtonComponent } from './vs-src-button.component';
import { VsAngularComponentsWithTailwindsModule } from 'vs-angular-components-with-tailwinds';

@NgModule({
  declarations: [
    VsSrcButtonComponent,
  ],
  imports: [
    CommonModule,
    VsSrcButtonRoutingModule,
    VsAngularComponentsWithTailwindsModule,
  ],
})
export class VsSrcButtonModule { }
