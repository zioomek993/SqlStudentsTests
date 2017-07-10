import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AppConectionService {

  constructor( private http: Http) { }

  public postHttp(url: string, obj: any, header: any){
    return this.http.post(url, obj, header);
  }

  UserIsLogged(): boolean {
      return false;
  }
}
