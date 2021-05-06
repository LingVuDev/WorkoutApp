import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { ExercisesComponent } from './exercises/exercises.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HistoryComponent,
    StartWorkoutComponent,
    ExercisesComponent,
  ],
  imports: [CommonModule],
})
export class PagesModule {}
