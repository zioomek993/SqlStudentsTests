import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {AuthService} from './auth.service';
import {CommonStructureComponent} from './common-structure/common-structure.component';
import {AppConectionService} from './app-conection.service';


const appRouting: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthService] },
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouting)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [AuthService, AppConectionService]
})
export class AppRoutingModule { }
