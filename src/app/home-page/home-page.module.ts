import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HomePageRooutingModule} from './home-page-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdButtonModule, MdSidenavModule, MdCardModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MdCardModule,
        HomePageRooutingModule
    ],
    declarations: [HomeComponent]
})
export class HomePageModule {
}
