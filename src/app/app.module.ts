import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdSidenavModule} from '@angular/material';
import 'hammerjs';



import { AppComponent } from './app.component';
import { CommonStructureComponent } from './common-structure/common-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonStructureComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
