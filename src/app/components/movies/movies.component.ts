import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { MovieService } from 'src/app/service/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  // Här skapar jag en tom list som framöver kommer att fylla med infromationnen jag har hämtat från internet
  movies: Movie[] = [];
  // Här hämtar jag min movieservice
  constructor(private service: MovieService) {}
  // Här tar jag emot data från min Service
  ngOnInit(): void {
    this.service.movies$.subscribe((data) => {
      this.movies = data;
    });

    this.service.getMovies();
  }
}
