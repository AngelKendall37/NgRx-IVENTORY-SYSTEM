import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction/transaction.module';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:8000/api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }
}
