import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  {
    path: '', component: TransactionsComponent,
    children: [
      { path: 'savings', loadChildren: () => import('./savings/savings.module').then(m => m.SavingsModule) },
      { path: 'loans', loadChildren: () => import('./loans/loans-routing.module').then(m => m.LoansRoutingModule) },
      { path: 'shares', loadChildren: () => import('./shares/shares.module').then(m => m.SharesModule) },
      { path: 'fixed-deposits', loadChildren: () => import('./fixed-deposits/fixed-deposits.module').then(m => m.FixedDepositsModule) }
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
