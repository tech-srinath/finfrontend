import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '', component: LayoutsComponent,
    children: [
      { path: 'customer', component: CustomerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
