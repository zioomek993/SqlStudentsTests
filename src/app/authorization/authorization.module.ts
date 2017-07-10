import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationComponentComponent} from './authorization-component/authorization-component.component';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import {MdCardModule, MdInputModule, MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthorizationService} from './authorization.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        FlexLayoutModule,
        MdCardModule,
        MdInputModule,
        MdButtonModule,
        AuthorizationRoutingModule
    ],
    declarations: [
        AuthorizationComponentComponent,

    ],
    exports: [AuthorizationComponentComponent],
    providers: [AuthorizationService]

})
export class AuthorizationModule {
}
