import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatsCardComponent } from './profile-stats-card.component';

describe('ProfileStatsCardComponent', () => {
  let component: ProfileStatsCardComponent;
  let fixture: ComponentFixture<ProfileStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileStatsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
