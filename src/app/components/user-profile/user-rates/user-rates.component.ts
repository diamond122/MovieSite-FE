import { Component, OnInit } from '@angular/core';

interface Votes {
  type: string;
  amount: number;
}
@Component({
  selector: 'app-user-rates',
  templateUrl: './user-rates.component.html',
  styleUrls: ['./user-rates.component.scss']
})
export class UserRatesComponent implements OnInit {
  votes: Votes[] = [
    { type: 'Rated', amount: 300 },
    { type: 'Liked', amount: 10 }
  ];

  public constructor() {}

  public ngOnInit(): void {}
}
