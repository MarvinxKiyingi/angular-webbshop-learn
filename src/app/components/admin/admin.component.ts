import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.orders$.subscribe((data) => {
      this.orders = data;
    });
    this.adminService.getOrders();
    console.log(this.orders);
  }
}
