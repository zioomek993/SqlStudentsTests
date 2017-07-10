import {Component, OnInit, Input } from '@angular/core';
import { AuthorizationService } from '../authorization.service'

@Component({
    selector: 'app-authorization-component',
    templateUrl: './authorization-component.component.html',
    styleUrls: ['./authorization-component.component.scss']
})
export class AuthorizationComponentComponent implements OnInit {


    @Input('login') login: string;

    @Input('password') password: string;

    constructor(private authorizationService: AuthorizationService) {
    }

    ngOnInit() {
    }

    logIn() {
        // this.authorizationService.
    }

}
