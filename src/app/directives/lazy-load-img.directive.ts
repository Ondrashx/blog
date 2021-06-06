import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyLoadImgDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    } else {
      // fallback to IntersectionObserver
    }
  }

}
