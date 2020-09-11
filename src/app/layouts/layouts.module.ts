import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { CustomerComponent } from './customer/customer.component';
// import { SearchComponent } from './search/search.component';

import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutsComponent,
    CustomerComponent,
    // SearchComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutsModule { }
