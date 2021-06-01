import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Startar med en tom lista
  cart: Movie[] = [];
  // skapar ett nytt subject som ska returnera en lista med av typen Movie
  private carts = new Subject<Movie[]>();
  //gör om mitt subject till att betesig som en observable
  carts$ = this.carts.asObservable();

  constructor() {}
  //Tar emot film objectet jag har tryckt på från min handleClick
  addToCart(theSelectedMovie: Movie): void {
    // börjar med att kolla omd et finns något i sessionStorage
    if (JSON.parse(sessionStorage.getItem('Cart'))) {
      // finns det något  så ska det sparas med variabeln här nedan.
      let getCart: [] = JSON.parse(sessionStorage.getItem('Cart'));
      // för att sedan slå ihop min mina gamla object med de nya i from av en lista.
      let updatedCart = [...getCart, theSelectedMovie];
      // och sedan spara den nya listan i sessionStorage.
      sessionStorage.setItem('Cart', JSON.stringify(updatedCart));
    } else {
      // Pushar den filmen till min tomma lista oven
      this.cart.push(theSelectedMovie);
      console.log(this.cart);
      //sparar den listan i sessionStorage
      sessionStorage.setItem('Cart', JSON.stringify(this.cart));
    }
  }

  getCartItems(): void {
    // om det inte finns någon lista i sessionStorage, spara den tomma listan ovan för att undvika detta felmedelandet:Cannot read property 'length' of null.
    if (!sessionStorage.getItem('Cart')) {
      sessionStorage.setItem('Cart', JSON.stringify(this.cart));
      // Annars hämtar jag min lista från sessionStorage
    } else {
      this.carts.next(JSON.parse(sessionStorage.getItem('Cart')));
      this.cart = JSON.parse(sessionStorage.getItem('Cart'));
    }
  }

  removeCartItem(rMovie: Movie): void {
    let cartItems: Movie[] = JSON.parse(sessionStorage.getItem('Cart'));
    console.log(cartItems);
    for (let position = 0; position < cartItems.length; position++) {
      if (cartItems[position].id === rMovie.id) {
        cartItems.splice(position, 1);
        sessionStorage.setItem('Cart', JSON.stringify(this.cart));
        console.log(cartItems);
      }
    }
    console.log('i have been reomved ');
  }

  // getTotalAmount(): number {
  //   let cartItems = JSON.parse(sessionStorage.getItem('Cart'));
  //   let sum = cartItems.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue.price;
  //   }, 0);
  //   return sum;
  // }
  getTotalAmount(): number {
    let cartItems = JSON.parse(sessionStorage.getItem('Cart'));
    // let startValue = 0;
    // for (let i = 0; i < cartItems.length; i++) {
    //   const cartItem = startValue + cartItems[i].price;
    //   return cartItem;
    // }
    let sum = cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    return sum;
  }
}
