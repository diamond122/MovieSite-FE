import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchbarService } from '../../global/service/searchbar.service';
import { MovieService } from './service/movie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  searchText: string;
  public pagination: {page: number, size: number } = {
    page: 1,
    size: 410
  };

  public message: string;

  public loading = true;

  public constructor(
    private searchService: SearchbarService,
    private movieService: MovieService
  ) {
    this.pageChanged();
  }

  public ngOnInit(): void {
    this.searchService.searchText.subscribe(val => {
      this.searchText = val;
    });
  }

  public pageChanged(page: number = 1): void {
    this.loading = true;
    this.movieService.getMoviesByPage(page).subscribe((movies: any): void => {
      if (movies) {
        this.movies = movies.response.results;
        this.loading = false;
      }
    }, (error: HttpErrorResponse) => {
      this.message = 'There is a error whit the connection try again...';
      this.loading = false;
    });
  }
}
