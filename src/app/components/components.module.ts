import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileModule } from './user-profile/user-profile.module';
import { MovieProfileComponent } from './movie-profile/movie-profile.component';

import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports: [CommonModule, UserProfileModule, MoviesModule],
  declarations: [MovieProfileComponent],
  exports: [UserProfileModule, MovieProfileComponent]
})
export class ComponentsModule {}
