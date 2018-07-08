import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private _active: boolean;

  public constructor() { }

  public ngOnInit(): void {
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(_active: boolean) {
    this._active = _active;
  }

}
