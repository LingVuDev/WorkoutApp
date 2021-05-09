import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { ActivityComponent } from './pages/activity/acitivity.component';
import { PagesModule } from './pages/pages.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { StartWorkoutComponent } from './pages/start-workout/start-workout.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'timeline'},
  { path: 'timeline', component: TimelineComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'start', component: StartWorkoutComponent },
  { path: 'exercises', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentsModule, PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
