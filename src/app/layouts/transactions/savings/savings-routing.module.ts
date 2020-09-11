import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingsComponent } from './savings.component';
import { NewComponent } from './new/new.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {
    path: '', component: SavingsComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: 'receipts', component: ReceiptsComponent },
      { path: 'payments', component: PaymentsComponent }
    ]
  },
  { path: '**', redirectTo: '/transactions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule { }
