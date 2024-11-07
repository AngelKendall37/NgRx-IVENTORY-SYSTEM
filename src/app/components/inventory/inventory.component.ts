import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as InventoryActions from '../../store/actions/inventory.actions';
import { InventoryState } from '../../store/reducers/inventory.reducer';
import { Product, Transaction } from '../../models/inventory/inventory.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  products$: Observable<Product[]>;
  transactions$: Observable<Transaction[]>;

  constructor(private store: Store<{ inventory: InventoryState }>) {
    this.products$ = this.store.select((state) => state.inventory.products);
    this.transactions$ = this.store.select(
      (state) => state.inventory.transactions
    );
  }

  ngOnInit(): void {
    this.store.dispatch(InventoryActions.loadProducts());
    this.store.dispatch(InventoryActions.loadTransactions());
  }
}
