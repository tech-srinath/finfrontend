import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Import child components */
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { DayOpeningComponent } from './day-opening/day-opening.component';
import { MaterialModule } from '../material/material.module';
import {AuthService} from './auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent, LoginComponent, DayOpeningComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
