import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdSidenavModule, MdCardModule} from '@angular/material';
import 'hammerjs';

import {AuthorizationModule} from './authorization/authorization.module'
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CommonStructureComponent} from './common-structure/common-structure.component';
import {HomePageModule} from './home-page/home-page.module';
import {HttpModule} from '@angular/http';
import {AppConectionService} from "./app-conection.service";

@NgModule({
    declarations: [
        AppComponent,
        CommonStructureComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        HttpModule,
        FormsModule,
        MaterialModule,
        MdCardModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdSidenavModule,
        AuthorizationModule,
        HomePageModule,
        AppRoutingModule


    ],
    providers: [AppConectionService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
