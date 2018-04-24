import { Injectable } from '@angular/core';

export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  subMenu: Array<MenuItem>;
}


@Injectable()
export class MenuService {

  items: Array<MenuItem>;
  isVertical = false;
  showingLeftSideMenu = false;

  toggleLeftSideMenu(): void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }

  constructor() { }

}
