import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../global/service/local-storage.service';
import { User } from '../../global/models/User';
import { AuthService } from '../../auth/auth.service';
import { SearchbarService } from '../../global/service/searchbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private _active: boolean;
  searchText: string;
  private _authenticated: { token: string | null; user: User | null } | null = {
    token: '',
    user: null
  };

  public constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private searchService: SearchbarService
  ) {
    this._authenticated.token = this.localStorageService.getItem('token');
    this._authenticated.user = JSON.parse(
      this.localStorageService.getItem('user')
    );

    this.authService.isAuthenticated().subscribe(
      (_identity: { token: string | null; user: User | null } | null): void => {
        if (_identity) {
          this._authenticated = _identity;
        }
      }
    );
  }

  public ngOnInit(): void {}

  public get active(): boolean {
    return this._active;
  }

  public set active(_active: boolean) {
    this._active = _active;
  }

  public updateSearch(_searchText: string) {
    this.searchService.searchText.next(_searchText);
  }

  public logOut(): void {
    this.localStorageService.clearLocalStorage();
    location.reload();
  }

  public get authenticated(): {
    token: string | null;
    user: User | null;
  } | null {
    return this._authenticated;
  }
}
