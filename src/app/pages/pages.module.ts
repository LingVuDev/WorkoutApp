import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ActivityComponent } from './activity/acitivity.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ComponentsModule } from '../components/components.module';
import { TimelineComponent } from './timeline/timeline.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    ProfileComponent,
    ActivityComponent,
    StartWorkoutComponent,
    ExercisesComponent,
    TimelineComponent,
  ],
})
export class PagesModule {}
