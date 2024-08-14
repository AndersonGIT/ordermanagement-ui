import { Component, EventEmitter, Output } from '@angular/core';
import { OrderInput } from '../../models/order-input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { Product } from '../../models/product';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  @Output() onSubmitOrderCallBack = new EventEmitter<OrderInput>();
  clients: Client[] = [];
  products: Product[] = [];

  showOrderForm: boolean = true;
  pClientId: number = 0;
  pProductId: number = 0;
  pQuantity: number = 0;

  constructor(private productService: ProductService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.listAllClients();
    this.listAllProducts();
  }

  listAllClients() {
    this.clientService.listAllClients().subscribe((clientsResult) => {
      this.clients = clientsResult;
    });
  }

  listAllProducts() {
    this.productService.listAllProducts().subscribe((productsResult) => {
      this.products = productsResult;
    });
  }


  onSubmit() {
    if (this.pClientId <= 0) {
      alert('Please, select a client.');
      return;
    }
    if (this.pProductId <= 0) {
      alert('Please, select a product.');
      return;
    }
    if (this.pQuantity <= 0) {
      alert('Please, inform the quantity.');
      return;
    }

    let orderPayload: OrderInput = {
      clientId: this.pClientId,
      paymentStatus: false,
      orderItems: [
        {
          productId: this.pProductId,
          quantity: this.pQuantity
        }
      ]
    };

    this.onSubmitOrderCallBack.emit(orderPayload);
  }

  clickShowOrderForm() {
    this.showOrderForm = !this.showOrderForm;
  }
}
