import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponentComponent } from './authorization-component/authorization-component.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { MdCardModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    AuthorizationRoutingModule
  ],
  declarations: [
    AuthorizationComponentComponent,

  ],
  exports: [AuthorizationComponentComponent]
  
})
export class AuthorizationModule { }
