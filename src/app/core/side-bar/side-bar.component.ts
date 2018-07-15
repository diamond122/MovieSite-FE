import { Component, OnInit } from '@angular/core';

interface MenuItems {
  title: string;
  icon: string;
  path: string;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  private _menuItems: MenuItems[] = [];
  private _year: number;

  public constructor() {
    this._menuItems = [
      { title: 'Movies', icon: 'fas fa-chart-line', path: '' },
      { title: 'Settings', icon: 'fas fa-cogs', path: 'user' }
    ];
    this._year = new Date().getFullYear();
  }

  public ngOnInit(): void {}

  public get menuItems(): MenuItems[] {
    return this._menuItems;
  }

  public get year(): number {
    return this._year;
  }

}
