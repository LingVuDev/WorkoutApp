import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTabsModule,
  ],
  exports: [HeaderComponent, MainLayoutComponent],
})
export class ComponentsModule {}
