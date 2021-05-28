import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<Movie[]>();
  movies$ = this.movies.asObservable();

  // Här inporterar jag min http module in till min service där jag kommer att använda mig av den.
  constructor(private http: HttpClient) {}

  getMovies(): void {
    if (!localStorage.getItem('Movies')) {
      // Hämta från api och spara i localstorage
      this.http
        .get<Movie[]>(
          'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
        )
        .subscribe((data) => {
          this.movies.next(data);
          localStorage.setItem('Movies', JSON.stringify(data));
        });
    } else {
      // Hämta data från localstorage
      this.movies.next(JSON.parse(localStorage.getItem('Movies')));
    }
  }
}
