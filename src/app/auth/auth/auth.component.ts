import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private _signIn: boolean;
  private _signUp: boolean;

  public constructor() {
    this._signUp = true;
  }

  public ngOnInit(): void { }

  public get signIn(): boolean {
    return this._signIn;
  }

  public get signUp(): boolean {
    return this._signUp;
  }


}
