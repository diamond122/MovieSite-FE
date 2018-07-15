import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieProfileComponent } from './core/movie-profile/movie-profile.component';

const appRoutes: Routes = [
  { path: 'movies', component: MovieProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
