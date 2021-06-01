import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() cartItem: Movie;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  handelRemoveItem(): void {
    this.cartService.removeCartItem();
  }
}
