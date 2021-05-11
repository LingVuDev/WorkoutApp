import { trigger, transition, style, animate } from '@angular/animations';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

type Orientation = 'prev' | 'next' | 'none';

/**
 * Carousel component
 * Guides used:
 * For component https://medium.com/showpad-engineering/angular-animations-lets-create-a-carousel-with-reusable-animations-81c0dd8847e8
 * For animations: https://www.bennadel.com/blog/3139-experimenting-with-conditional-enter-leave-animations-in-angular-2-rc-6.htm
 *
 * @export
 * @class CarouselComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => next', [
        style({ transform: 'translate(100%, 0)' }),
        animate('300ms', style({ transform: 'translate(0, 0)' })),
      ]),
      transition('next => void', [
        style({ transform: 'translate(0, 0)' }),
        animate('300ms', style({ transform: 'translate(-100%, 0)' })),
      ]),
      transition('void => prev', [
        style({ transform: 'translate(-100%, 0)' }),
        animate('300ms', style({ transform: 'translate(0, 0)' })),
      ]),
      transition('prev => void', [
        style({ transform: 'translate(0, 0)' }),
        animate('300ms', style({ transform: 'translate(100%, 0)' })),
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slides;

  currentSlide = 0;

  direction: Orientation = 'next';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onPreviousClick() {
    this.direction = 'prev';
    // Force the Template to apply the new animation state before we actually
    // change the rendered element view-model. If we don't force a change-detection,
    // the new [@orientation] state won't be applied prior to the "leave" transition;
    // which means that we won't be leaving from the "expected" state.
    this.changeDetectorRef.detectChanges();
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    this.direction = 'next';
    // Force the Template to apply the new animation state before we actually
    // change the rendered element view-model. If we don't force a change-detection,
    // the new [@orientation] state won't be applied prior to the "leave" transition;
    // which means that we won't be leaving from the "expected" state.
    this.changeDetectorRef.detectChanges();
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}
