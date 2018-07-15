import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

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

  public constructor(private router: Router) {
    this._menuItems = [
      { title: 'Trending', icon: 'fas fa-chart-line', path: 'trending' },
      { title: 'Recommend me', icon: 'fas fa-user', path: 'recomendation' },
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

  public redir(_path: string): void {
    this.router.navigate(['/', _path]);
  }
}
