import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';
import { SharesComponent } from './shares.component';


@NgModule({
  declarations: [SharesComponent],
  imports: [
    CommonModule,
    SharesRoutingModule
  ]
})
export class SharesModule { }
