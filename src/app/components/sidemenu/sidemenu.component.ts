import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidemenuService } from './sidemenu.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements AfterViewInit {

  @ViewChild('drawer') public sideMenu: MatDrawer;
  
  constructor(private sideMenuService: SidemenuService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sideMenuService.sideMenu = this.sideMenu;
  }
}
