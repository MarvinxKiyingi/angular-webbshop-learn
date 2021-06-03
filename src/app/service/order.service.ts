import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../model/Movie';
import { Order, orderItem } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  oders = new Subject<Order>();
  orders$ = this.oders.asObservable();
  cartItems: Movie[] = [];
  constructor(private http: HttpClient) {}

  createOrder(firstName: string, paymentMethod: string): void {
    //Hämta våra beställning från local storage
    this.cartItems = JSON.parse(sessionStorage.getItem('Cart'));
    let date = new Date();
    //addera totalpriset på carten
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

    let orderRows = [];

    for (let i = 0; i < this.cartItems.length; i++) {
      const orderInfo = new orderItem(this.cartItems[i].id);
      orderRows.push(orderInfo);
    }
    // console.log(orderRows);

    let newOrder = new Order(date, firstName, paymentMethod, totalSumInCart, [
      ...orderRows,
    ]);
    console.log(newOrder);
    // this.sendOrder(newOrder);
    this.clearCart();
  }

  sendOrder(newOrder: Order) {
    return this.http
      .post<Order>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
        newOrder
      )
      .subscribe((data: Order) => {
        console.log(data);
      });
  }

  clearCart(): void {
    console.log('cleared sessionstorage');
    sessionStorage.removeItem('Cart');
    // localStorage.removeItem('Orders');
  }
}
