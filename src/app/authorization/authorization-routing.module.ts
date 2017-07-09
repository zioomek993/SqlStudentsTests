import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponentComponent } from './authorization-component/authorization-component.component'
import {AuthService} from '../auth.service';
import {AppConectionService} from '../app-conection.service';

const appRouters: Routes = [
  {path: 'login', component: AuthorizationComponentComponent, canActivate: [AuthService]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRouters)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthService, AppConectionService]
})
export class AuthorizationRoutingModule { }