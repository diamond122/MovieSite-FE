import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthComponent } from './auth/auth/auth.component';
import { MoviesComponent } from './components/movies/movies.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'movie', component: MoviesComponent },
  { path: 'movie/:id', component: MovieProfileComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
