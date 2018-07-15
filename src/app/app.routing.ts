import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'movie/:id', component: MovieProfileComponent},
  { path: 'user', component: UserProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
