import { Component } from '@angular/core';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  path: string;
  constructor(private _router: Router) {
    _router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.path = _router.url;
      }
    });
  }
}
