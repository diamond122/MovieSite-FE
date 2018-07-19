import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies.component';
import { MoviesRouting } from './movie-routing.module';
import { FilterPipe } from '../../filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../loading/loading.component';
@NgModule({
  imports: [CommonModule, FormsModule, MoviesRouting, NgbModule],
  declarations: [MovieComponent, MoviesComponent, FilterPipe, LoadingComponent]
})
export class MoviesModule {}
