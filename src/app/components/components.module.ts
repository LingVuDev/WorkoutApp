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
import { PostComponent } from './post/post.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    ProfileStatsCardComponent,
    PostComponent,
    CarouselComponent,
    ActivityCardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    MainLayoutComponent,
    ProfileStatsCardComponent,
    PostComponent,
    ActivityCardComponent,
  ],
})
export class ComponentsModule {}
