import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileModule } from './user-profile/user-profile.module';
import { MovieProfileComponent } from './movie-profile/movie-profile.component';

import { MoviesModule } from './movies/movies.module';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, UserProfileModule, MoviesModule, YoutubePlayerModule, NgbModule],
  declarations: [MovieProfileComponent],
  exports: [UserProfileModule, MovieProfileComponent]
})
export class ComponentsModule {}
