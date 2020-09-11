import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedDepositsRoutingModule } from './fixed-deposits-routing.module';
import { FixedDepositsComponent } from './fixed-deposits.component';


@NgModule({
  declarations: [FixedDepositsComponent],
  imports: [
    CommonModule,
    FixedDepositsRoutingModule
  ]
})
export class FixedDepositsModule { }
