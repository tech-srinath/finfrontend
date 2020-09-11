import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  cake: string;

  constructor(private _transaction: TransactionsService) { }

  ngOnInit() {
    this._transaction.customerName$.subscribe(res => {
      this.cake = res;
    });
  }
}
