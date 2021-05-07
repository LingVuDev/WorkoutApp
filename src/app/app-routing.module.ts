import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { HistoryComponent } from './pages/history/history.component';
import { PagesModule } from './pages/pages.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { StartWorkoutComponent } from './pages/start-workout/start-workout.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'start', component: StartWorkoutComponent },
  { path: 'exercises', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentsModule, PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
