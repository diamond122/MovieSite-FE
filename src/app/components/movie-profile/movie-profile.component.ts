import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { MovieService } from '../movies/service/movie.service';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})

export class MovieProfileComponent implements OnInit {

  public movie: any;
  public videoId: string;
  public bannerUrl: string = environment.bannerMovie;
  public message: string;
  public loading = true;

  public constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.loading = true;
    this.route.params.subscribe((params: Params): void => {
      if (params['id']) {
        this.movieService.getMoviesById(params['id']).subscribe((movie: any): void => {
          if (movie) {
            this.movieService.getYouTubeVideo(params['id']).subscribe((_movie: any): void => {
              _movie.videos.results.forEach((video: any): void => {
                if (video.site === 'YouTube') {
                  this.videoId = video.key;
                  return;
                }
              });
              this.loading = false;
              this.movie = movie.response;

            }, (error: HttpErrorResponse): void => {
              this.loading = false;
              this.message = 'There is a problem with the server. Try again...';
            });
          }
        }, (error: HttpErrorResponse): void => {
          this.loading = false;
          this.message = 'There is a problem with the server. Try again...';
        });
      }
    }, (error: HttpErrorResponse): void => {
      this.loading = false;
      this.message = 'There is a problem with the server. Try again...';
    });
  }

  public ngOnInit(): void {
  }

}
