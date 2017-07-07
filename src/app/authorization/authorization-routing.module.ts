import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponentComponent } from './authorization-component/authorization-component.component'

const appRouters: Routes = [
  {
    path: 'login',
    component: AuthorizationComponentComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRouters)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthorizationRoutingModule { }
  