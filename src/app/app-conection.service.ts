import { Injectable } from '@angular/core';

@Injectable()
export class AppConectionService {

  constructor() { }

  UserIsLogged(): boolean {
      return false;
  }
}
