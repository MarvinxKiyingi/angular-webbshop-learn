import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Movie[] = [];

  constructor(private allCartItems: CartService) {}

  ngOnInit(): void {
    // här tar jag emot listan på alla valda film object i form av en lista. Som jag sedan ger dess värde till min tomma lista här ovan movies
    this.allCartItems.carts$.subscribe((data) => {
      this.cartItems = data;
    });
    this.allCartItems.getCart();
    console.log(this.cartItems);
  }
}
