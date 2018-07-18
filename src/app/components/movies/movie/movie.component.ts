import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/global/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input('movie') movie: Movie;
  liked: false;

  constructor() {}

  ngOnInit() {}
}
