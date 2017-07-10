import { Injectable } from '@angular/core';
import {AppConectionService} from "../app-conection.service";

@Injectable()
export class AuthorizationService {

  constructor(private appConnectionService: AppConectionService ) { }

  public loginUser(login: string, password: string){
    // let obj = `grant_type=password&username=${login}&password=${password}`;
    // let header = {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   }
    // }
    // this.appConnectionService.postHttp('http://10.24.14.219:5786/Token', obj, header).then();

  }

}
