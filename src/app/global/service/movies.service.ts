import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[] = [];

  constructor() {
    this.generateMovies();
  }

  public getAll(): Movie[] {
    return this.movies.slice();
  }

  public getMovie(_id: number): Movie[] {
    return this.movies.filter(movie => movie.id === _id);
  }

  generateMovies(): void {
    const n = 10;
    for (let i = 0; i < n; i++) {
      this.movies.push(
        new Movie(
          i,
          'movie' + i,
          [],
          '',
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7dAh80ydoWvUaBE8uFYkp9WsoSC.jpg',
          ''
        )
      );
    }
  }
}
