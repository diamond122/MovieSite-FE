import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchbarService } from '../../global/service/searchbar.service';
import { MoviesService } from '../../global/service/movies.service';
import { Movie } from '../../global/models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  searchText: string;

  public constructor(
    private searchService: SearchbarService,
    private movieService: MoviesService
  ) {}

  public ngOnInit(): void {
    this.movies = this.movieService.getAll();
    this.searchService.searchText.subscribe(val => {
      this.searchText = val;
    });
  }
}
