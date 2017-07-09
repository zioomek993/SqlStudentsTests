import { Component, OnInit } from '@angular/core';

import { AppConectionService } from './app-conection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  providers: [AppConectionService]
})
export class AppComponent implements OnInit {
   title = 'app';

  public userisLogged = false;

  constructor(private appConectionService: AppConectionService) {

  }

  ngOnInit() {

     this.userisLogged = this.appConectionService.UserIsLogged();
  }

}
