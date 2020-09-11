import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Savings family
import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsComponent } from './savings.component';
import { NewComponent } from './new/new.component';

// Tools components
import { TransactionsModule } from '../transactions.module';
import { ReceiptsComponent } from './receipts/receipts.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [SavingsComponent, NewComponent, ReceiptsComponent, PaymentsComponent],
  imports: [
    CommonModule,
    SavingsRoutingModule,
    TransactionsModule
  ]
})
export class SavingsModule { }
