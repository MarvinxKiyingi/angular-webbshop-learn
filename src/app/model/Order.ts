export class Order {
  id: number;
  companyId: number = 9610;
  created: Date;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: orderItem[];
  constructor(created, createdBy, paymentMethod, totalPrice, orderRows) {
    this.created = created;
    this.createdBy = createdBy;
    this.paymentMethod = paymentMethod;
    this.totalPrice = totalPrice;
    this.orderRows = orderRows;
  }
}
export class orderItem {
  id: number;
  productId: number;
  product: string;
  amount: number;
  orderid: number;
  constructor(productId) {
    this.productId = productId;
  }
}
