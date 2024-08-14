import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private orderManagementApiUrl: string = 'https://localhost:7192/api/Client';

  constructor(private httpClient: HttpClient) { }

  listAllClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.orderManagementApiUrl);
  }
}
