import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '', component: LayoutsComponent,
    children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
