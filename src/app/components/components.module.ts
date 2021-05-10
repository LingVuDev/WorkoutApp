import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatCardModule } from '@angular/material/card';
import { ProfileStatsCardComponent } from './profile-stats-card/profile-stats-card.component';


@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent, ProfileStatsCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [HeaderComponent, MainLayoutComponent, ProfileStatsCardComponent],
})
export class ComponentsModule {}
