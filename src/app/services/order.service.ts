import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderOutput } from '../models/order-output';
import { Observable } from 'rxjs';
import { OrderInput } from '../models/order-input';
import { OrderOutputMap } from '../models/order-output-map';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderManagementApiUrl: string = 'https://localhost:7192/api/Order';

  constructor(private httpClient: HttpClient) { }

  listAllOrders() : Observable<OrderOutput[]> {
    return this.httpClient.get<OrderOutput[]>(this.orderManagementApiUrl);
  }

  listAllOrdersMapped(): Observable<OrderOutputMap[]> {
    return this.httpClient.get<OrderOutputMap[]>(this.orderManagementApiUrl);
  }

  deleteOrder(orderId: number): Observable<number> {
    return this.httpClient.delete<number>(`${this.orderManagementApiUrl}/${orderId}`);
  }

  updateOrder(orderPayload: OrderInput): Observable<OrderInput> {
    return this.httpClient.put<OrderInput>(`${this.orderManagementApiUrl}/${orderPayload.id}`, orderPayload);
  }

  insertOrder(orderPayload: OrderInput): Observable<OrderInput> {
    return this.httpClient.post<OrderInput>(`${this.orderManagementApiUrl}`, orderPayload);
  }
}
