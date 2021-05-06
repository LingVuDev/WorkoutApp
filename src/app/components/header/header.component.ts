import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: 'profile', label: 'Profile', icon: 'person' },
    { path: 'history', label: 'History', icon: 'history' },
    { path: 'start', label: 'Start Workout', icon: 'add' },
    { path: 'exercises', label: 'Exercises', icon: 'fitness_center' },
  ];
  activeLink;

  constructor(router: Router) {
    router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe(({ snapshot }: ActivationEnd) => {
        this.activeLink = snapshot.url[0].path;
      });
  }

  ngOnInit(): void {}
}
