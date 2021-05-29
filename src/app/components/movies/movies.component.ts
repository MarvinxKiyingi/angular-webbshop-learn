import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart.service';
import { MovieService } from 'src/app/service/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  // Här skapar jag en tom list som framöver kommer att fylla med infromationnen jag har hämtat från internet
  movies: Movie[] = [];
  // skapat en variabel för att hantera den filmen jag klickar på som tas emot av min Output() från barnet.
  selectedMovie: Movie;
  // Här hämtar jag min movieService och cartService in till movie componenten.
  constructor(
    private movieService: MovieService,
    private cartService: CartService
  ) {}
  // Här tar jag emot data från min Service
  ngOnInit(): void {
    // här tar jag emot listan med objecten från Sebbes API och ger dess värde till min tomma lista här ovan movies
    this.movieService.movies$.subscribe((data) => {
      this.movies = data;
    });
    // här säger jag till min movie service att sätta igång functionen som hämtar alla film objecten i from av en lista. Som raderna innan tar emot och delegerar om.
    this.movieService.getMovies();
  }

  handleSelectedMovie(aMovie: Movie): void {
    // ger selectedMovie variabeln här ovan värdet av handleSelectedMovie functionen, alltså den clickade filmen (aMovie)
    this.selectedMovie = aMovie;
    console.log('sending this: ', this.selectedMovie);
    // Här ger jag min cartService function värdet jag skickade från handleSelectedMovie function till selectedMovie variabeln.
    this.cartService.getSelectedMovie(this.selectedMovie);
  }
}
