import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileModule } from './user-profile/user-profile.module';
import { MovieProfileComponent } from './movie-profile/movie-profile.component';

@NgModule({
  imports: [CommonModule, UserProfileModule],
  declarations: [MovieProfileComponent],
  exports: [UserProfileModule, MovieProfileComponent]
})
export class ComponentsModule {}
