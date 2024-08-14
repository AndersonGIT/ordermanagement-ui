import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private orderManagementApiUrl: string = 'https://localhost:7192/api/Product';

  constructor(private httpClient: HttpClient) { }

  listAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.orderManagementApiUrl);
  }
}
