import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VsSrcButtonComponent } from './vs-src-button.component';

const routes: Routes = [
  { path: '', component: VsSrcButtonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VsSrcButtonRoutingModule { }
