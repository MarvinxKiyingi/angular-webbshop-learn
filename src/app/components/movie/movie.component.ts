import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movieItem: Movie;
  // @Output() selectedMovie = new EventEmitter<Movie>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  handleClick(): void {
    this.cartService.addToCart(this.movieItem);
  }
}