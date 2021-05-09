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
    { path: 'timeline', label: 'Timeline', icon: 'home' },
    { path: 'activity', label: 'Activity', icon: 'notifications' },
    { path: 'start', label: 'Start Workout', icon: 'add' },
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
