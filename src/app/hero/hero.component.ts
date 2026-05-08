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
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.scrollService.isHeroVisible.set(entry.isIntersecting);
        if (entry.isIntersecting) {
          this.scrollService.isDarkHeader.set(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this.elementRef.nativeElement);
  }
}
