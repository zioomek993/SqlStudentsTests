import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AuthService} from '../auth.service';

import {AppConectionService} from '../app-conection.service';
import {HomeComponent} from './home/home.component';


const appRouting: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthService]}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRouting)
    ],
    declarations: [],
    exports: [RouterModule],
    providers: [AuthService, AppConectionService]
})
export class HomePageRooutingModule { }
