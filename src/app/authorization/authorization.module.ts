import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponentComponent } from './authorization-component/authorization-component.component';
import { AppConectionService } from '../app-conection.service';
import { AuthorizationRoutingModule } from './authorization-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppConectionService,
    AuthorizationRoutingModule
  ],
  declarations: [
    AuthorizationComponentComponent,

  ]
})
export class AuthorizationModule { }
