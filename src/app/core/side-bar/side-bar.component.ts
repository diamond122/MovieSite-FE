import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../global/models/User';
import { LocalStorageService } from '../../global/service/local-storage.service';

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
  private _authenticated: {token: string | null, user: User | null} | null = { token: '', user: null };

  public constructor(private authService: AuthService, private localStorageService: LocalStorageService) {
    this._menuItems = [
      { title: 'Movies', icon: 'fas fa-chart-line', path: '' },
      { title: 'Settings', icon: 'fas fa-cogs', path: 'user' }
    ];
    this._year = new Date().getFullYear();

    this._authenticated.token = this.localStorageService.getItem('token');
    this._authenticated.user = JSON.parse(this.localStorageService.getItem('user'));

    this.authService.isAuthenticated().subscribe((_identity: {token: string | null, user: User | null} | null): void => {
      if (_identity) {
        this._authenticated = _identity;
      }
    });
  }

  public ngOnInit(): void {}

  public get menuItems(): MenuItems[] {
    return this._menuItems;
  }

  public get year(): number {
    return this._year;
  }

  public get authenticated(): {token: string | null, user: User | null} | null {
    return this._authenticated;
  }

}
