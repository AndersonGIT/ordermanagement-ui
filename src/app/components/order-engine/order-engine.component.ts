import { Component, OnInit } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { OrderService } from '../../services/order.service';
import { OrderOutput } from '../../models/order-output';
import { OrderInput } from '../../models/order-input';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-order-engine',
  standalone: true,
  imports: [OrderFormComponent, OrderComponent, CommonModule],
  templateUrl: './order-engine.component.html',
  styleUrl: './order-engine.component.css'
})
export class OrderEngineComponent implements OnInit {
  ordersOutput: OrderOutput[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.listAllOrdersCallBack();
  }

  listAllOrdersCallBack() {
    console.log('Starting To Call API');
    this.orderService.listAllOrders().subscribe((ordersResult) => {
      this.ordersOutput = ordersResult;
      console.log("Orders Ouput List");
      console.log(this.ordersOutput);
    });
    console.log('After Server Call');
  }

  orderDeleteCallBack(order: OrderOutput) {
    this.orderService.deleteOrder(order.id ?? 0).subscribe(() => {
      this.ordersOutput = this.ordersOutput.filter(orderItem => orderItem.id !== order.id);
    });
  }

  payClickCallBack(order: OrderOutput) {
    var orderPayload: OrderInput = {
      id: order.id,
      clientId: 3,
      paymentStatus: !order.paymentStatus,
      orderItems: [
        {
          id: 4,
          orderId: 2,
          productId: 2,
          quantity: 10
        },
        {
          id: 5,
          orderId: 2,
          productId: 2,
          quantity: 3
        }
      ]
    };

    this.orderService.updateOrder(orderPayload).subscribe(() => {
      this.listAllOrdersCallBack();
    });
  }

  submitOrderCallBack(orderPayload: OrderInput) {
    this.orderService.insertOrder(orderPayload).subscribe(() => {
      this.listAllOrdersCallBack();
    });    
  }
}
