import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  private _sideMenu: MatDrawer;

  constructor() { }

  public set sideMenu(v : MatDrawer) {
    this._sideMenu = v;
  }

  /**
   * toggle: Fecha/Abre o sidemenu
   */
  public toggle() {
    this._sideMenu.toggle();
  }
}
