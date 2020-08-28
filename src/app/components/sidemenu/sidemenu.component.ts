import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidemenuService } from './sidemenu.service';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements AfterViewInit {

  public matcher: MediaQueryList;

  @ViewChild('drawer') public sideMenu: MatDrawer;
  
  constructor(
    private sideMenuService: SidemenuService, 
    private mediaMatcher: MediaMatcher
  ) 
  {
    this.matcher = this.mediaMatcher.matchMedia('(max-width: 600px)');
  }

  public ngAfterViewInit(): void {
    this.sideMenuService.sideMenu = this.sideMenu;
  }

  public sideMenuMode(): string {
    return this.matcher.matches ? 'over' : 'side';
  }
}
