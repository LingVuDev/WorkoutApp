import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ActivityComponent } from './activity/acitivity.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ComponentsModule } from '../components/components.module';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [
    ProfileComponent,
    ActivityComponent,
    StartWorkoutComponent,
    ExercisesComponent,
    TimelineComponent,
  ],
})
export class PagesModule {}
