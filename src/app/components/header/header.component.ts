import { Component, OnInit } from '@angular/core';
import { SidemenuService } from '../sidemenu/sidemenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideMenuService: SidemenuService) { }

  ngOnInit(): void {
  }

  /**
   * toggleSideMenu Abre/Fecha o menu lateral
   */
  toggleSideMenu() {
    this.sideMenuService.toggle();
  }
}
