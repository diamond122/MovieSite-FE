import { Component, OnInit } from '@angular/core';
import { User } from '../../global/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private _user: User;
  public constructor() {}

  public ngOnInit(): void {}
}
