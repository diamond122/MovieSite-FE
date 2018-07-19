import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies.component';
import { MoviesRouting } from './movie-routing.module';
import { FilterPipe } from '../../filter.pipe';
@NgModule({
  imports: [CommonModule, FormsModule, MoviesRouting],
  declarations: [MovieComponent, MoviesComponent, FilterPipe]
})
export class MoviesModule {}
