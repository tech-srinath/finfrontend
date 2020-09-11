import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private _customerSource = new Subject<string>();

  customerName$ = this._customerSource.asObservable();

  constructor() { }

  getCustomer(customerName: string) {
    this._customerSource.next(customerName);
  }
}
