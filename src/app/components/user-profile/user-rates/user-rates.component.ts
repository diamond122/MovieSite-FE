import { Component, OnInit } from '@angular/core';

interface Votes {
  rated: number;
  liked: number;
}
@Component({
  selector: 'app-user-rates',
  templateUrl: './user-rates.component.html',
  styleUrls: ['./user-rates.component.scss']
})
export class UserRatesComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
