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
}
