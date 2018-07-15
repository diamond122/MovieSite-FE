import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  private _menuItems: { page_name: string, route: string }[] = [];
  private _year: number;

  public constructor() {
    this._menuItems = [
      { page_name: 'Trending', route: '' },
      { page_name: 'Recommend me', route: ''},
      { page_name: 'Settings', route: '' },
      { page_name: 'All Movies', route: 'movies' }
    ];
    this._year = new Date().getFullYear();
  }

  public ngOnInit(): void {}

  public get menuItems(): {page_name: string}[] {
    return this._menuItems;
  }

  public get year(): number {
    return this._year;
  }
}
