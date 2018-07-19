import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { MovieService } from '../movies/service/movie.service';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})

export class MovieProfileComponent implements OnInit {

  public constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.route.params.subscribe((params: Params): void => {
      if (params['id']) {
        this.movieService.getMoviesById(params['id']).subscribe((movie: any): void => {
          console.log(movie);
        });
      }
    });
  }

  ngOnInit() {
  }

}
