import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public imageUrl: string = environment.imageMovie;
  @Input('movie') movie: any;
  liked: false;

  constructor() {
  }

  ngOnInit() {
    this.movie.poster_path = this.movie.poster_path !== null ? this.imageUrl + this.movie.poster_path : '/assets/img/poster.jpg';
  }
}
