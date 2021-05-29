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
  // addToCart(aMovie: Movie): void {
  //   // Pushar den filmen till min tomma lista oven
  //   this.cart.push(aMovie);
  //   //sparar den listan i sessionStorage
  //   sessionStorage.setItem('Cart', JSON.stringify(this.cart));
  //   //kör igång min nästa funcktion
  //   this.getCart();
  // }
  getSelectedMovie(theSelectedMovie: Movie): void {
    // Pushar den filmen till min tomma lista oven
    this.cart.push(theSelectedMovie);
    //sparar den listan i sessionStorage
    sessionStorage.setItem('Cart', JSON.stringify(this.cart));
    //kör igång min nästa funcktion
    this.getCart();
  }

  getCart(): void {
    // om det inte finns någon lista i sessionStorage, visa den tomma listan ovan (för att hindra detta fel medelandet: Cannot read property 'length' of null)
    if (!sessionStorage.getItem('Cart')) {
      this.carts.next(this.cart);
      // Annars hämtar jag min lista från sessionStorage
      //OBS!! läs på lite mer om .next
    } else {
      this.carts.next(JSON.parse(sessionStorage.getItem('Cart')));
    }
  }
}
