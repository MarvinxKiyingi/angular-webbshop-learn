import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  allCartItems: Movie[] = [];

  constructor(private cartItems: CartService) {}

  ngOnInit(): void {
    this.cartItems.carts$.subscribe((data) => {
      this.allCartItems = data;
    });
    this.cartItems.getCart();
    console.log(this.allCartItems);
  }
}
