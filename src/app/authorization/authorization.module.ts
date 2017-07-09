import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponentComponent } from './authorization-component/authorization-component.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import {MdCardModule, MdInputModule, MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
      FlexLayoutModule,
    MdCardModule,
    MdInputModule,
      MdButtonModule,
    AuthorizationRoutingModule
  ],
  declarations: [
    AuthorizationComponentComponent,

  ],
  exports: [AuthorizationComponentComponent]
  
})
export class AuthorizationModule { }
