import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderOutput } from '../../models/order-output';
import { CommonModule } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  @Input() pOrder!: OrderOutput;
  @Output() onOrderDeleteCallBack = new EventEmitter<OrderOutput>();
  @Output() onPayClickCallBack = new EventEmitter<OrderOutput>(); 

  faTimes = faTimes;

  onOrderDelete(order: OrderOutput) {
    this.onOrderDeleteCallBack.emit(order);
  }

  onPayClick(order: OrderOutput) {
    this.onPayClickCallBack.emit(order);
  }
}
