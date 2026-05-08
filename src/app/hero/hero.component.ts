import { Component, ElementRef, AfterViewInit, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);

  ngAfterViewInit() {
    // Observer for logo animation (isHeroVisible)
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        this.scrollService.isHeroVisible.set(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Observer for header color (isDarkHeader)
    const themeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.scrollService.isDarkHeader.set(false);
        }
      },
      { 
        threshold: 0,
        rootMargin: '-88px 0px -100% 0px'
      }
    );

    heroObserver.observe(this.elementRef.nativeElement);
    themeObserver.observe(this.elementRef.nativeElement);
  }
}
