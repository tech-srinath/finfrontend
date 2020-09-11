import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component Imports */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/** Material Imports */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule { }
