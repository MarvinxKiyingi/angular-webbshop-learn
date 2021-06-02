import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartItems: Movie[] = [];
  totalsum: number;

  userFrom = this.fb.group({
    firstName: ['', Validators.required],
    paymentMethod: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    //subsctibar på det som finns i min local storage
    this.cartService.carts$.subscribe((data) => {
      this.cartItems = data;
    });

    this.cartService.getCartItems();
    this.totalsum = this.cartService.getTotalAmount();
    //let order = this.orderServive.orders.subscribe((data) => { console.log(data) })
  }

  onSubmit(): void {
    let firstName = this.userFrom.value.firstName;
    let paymentMethod = this.userFrom.value.paymentMethod;
    this.orderService.createOrder(firstName, paymentMethod);
  }
}
