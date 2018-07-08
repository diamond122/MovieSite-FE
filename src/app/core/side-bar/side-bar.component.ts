import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  private _menuItems: string[] = [];
  private _year: number;

  public constructor() {
    this._menuItems = ['Trending', 'Recommend me', 'Settings'];
    this._year = new Date().getFullYear();
  }

  public ngOnInit(): void {
  }

  public get menuItems(): string[] {
    return this._menuItems;
  }

  public get year(): number {
    return this._year;
  }

}
