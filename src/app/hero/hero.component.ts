import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollService.currentPage.set('home');
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
}
