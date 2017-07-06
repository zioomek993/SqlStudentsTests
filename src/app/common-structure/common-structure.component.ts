import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild  } from '@angular/core';

import { MdSidenav } from "@angular/material";
import { AppConectionService } from '../app-conection.service';

@Component({
  selector: 'app-common-structure',
  templateUrl: './common-structure.component.html',
  styleUrls: ['./common-structure.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AppConectionService]
})
export class CommonStructureComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;
  navMode = 'side';

  constructor(private appConectionService: AppConectionService) {
   }

  ngOnInit() {
    if (window.innerWidth < 960) {
      this.navMode = 'over';
    }
   
    
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 960) {
            this.navMode = 'over';
            this.sidenav.close();
        }
        if (event.target.innerWidth > 960) {
           this.navMode = 'side';
           this.sidenav.open();
        }
    }
  
  
}
