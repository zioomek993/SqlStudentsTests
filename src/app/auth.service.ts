import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AppConectionService} from './app-conection.service';

@Injectable()
export class AuthService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (route.url[0] && route.url[0].path === 'login' && this.appConnection.UserIsLogged()){
      this.router.navigate(['']);
      return false ;
    }else if(route.url[0] && route.url[0].path === 'login' && !this.appConnection.UserIsLogged()) {
      return true;
    } else if (!this.appConnection.UserIsLogged()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;

  }
  // this.router.navigate(['/login']);
  constructor(private router: Router, private appConnection: AppConectionService) {

  }

}
