import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs';
import { Movie } from '../../../global/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = `${environment.ApiUrl}/movies`;

  public constructor(private httpClient: HttpClient) {
  }

  public getMoviesByPage(page: number = 1): Observable<Movie[]> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        page: page.toString(),
        id: '',
        gender: '',
        name: ''
      }
    });
    return this.httpClient.get<Movie[]>(this.moviesUrl, { params: params });
  }

  public getMoviesById(id: string): Observable<Movie> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        page: '',
        id: id,
        gender: '',
        name: ''
      }
    });
    return this.httpClient.get<Movie>(this.moviesUrl, { params: params });
  }

  public getYouTubeVideo(id: string ): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=87829c8208f4f2fdaffabb5e72fa039f&append_to_response=videos`;
    return this.httpClient.get<any>(url);
  }
}
