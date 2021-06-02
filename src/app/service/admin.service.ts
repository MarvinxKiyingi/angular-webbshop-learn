import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private orders = new Subject<Order[]>();
  orders$ = this.orders.asObservable();

  constructor(private http: HttpClient) {}

  getOrders(): void {
    if (!localStorage.getItem('Orders')) {
      this.http
        .get<Order[]>(
          'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=9610'
        )
        .subscribe((data) => {
          localStorage.setItem('Orders', JSON.stringify(data));
        });
    } else {
      this.orders.next(JSON.parse(localStorage.getItem('Orders')));
    }
  }
}
