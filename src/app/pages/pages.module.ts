import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [
    ProfileComponent,
    HistoryComponent,
    StartWorkoutComponent,
    ExercisesComponent,
  ],
})
export class PagesModule {}
