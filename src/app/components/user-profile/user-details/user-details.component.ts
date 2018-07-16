import { Component, OnInit } from '@angular/core';
import { User } from '../../../global/models/User';
import { LocalStorageService } from '../../../global/service/local-storage.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private _authenticated: {token: string | null, user: User | null} | null = { token: '', user: null };

  public constructor(private localStorageService: LocalStorageService) {}

  public ngOnInit(): void {
    this._authenticated.token = this.localStorageService.getItem('token') ? this.localStorageService.getItem('token') : '';
    this._authenticated.user = this.localStorageService.getItem('user') ? JSON.parse(this.localStorageService.getItem('user')) : null;
  }

  public get user(): {token: string | null, user: User | null} | null {
    return this._authenticated;
  }
}
