import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component Imports */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/** Material Imports */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule { }
