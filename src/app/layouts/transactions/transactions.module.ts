import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Transactions
import { TransactionsComponent } from './transactions.component';
import { TransSidebarComponent } from './trans-sidebar/trans-sidebar.component';
import { TransactionsRoutingModule } from './transactions-routing.module';

// Sub-components

// Comon components
import { MaterialModule } from '../../material/material.module';
import { LedgerComponent } from '../facility/ledger/ledger.component';
import { NomineeComponent } from './tools/nominee/nominee.component';
import { AcTypeComponent } from './tools/ac-type/ac-type.component';
import { AcTransferComponent } from './tools/ac-transfer/ac-transfer.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    TransSidebarComponent,
    NomineeComponent,
    AcTypeComponent,
    AcTransferComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionsRoutingModule
  ],
  exports: [
    NomineeComponent,
    AcTypeComponent,
    AcTransferComponent,
  ],
  entryComponents: [
    LedgerComponent
  ]
})
export class TransactionsModule { }
