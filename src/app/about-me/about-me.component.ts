import { Component, ElementRef, AfterViewInit, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.scrollService.isDarkHeader.set(true);
        }
      },
      { 
        threshold: 0,
        rootMargin: '-88px 0px -100% 0px' // Detect when top of component hits the bottom of the header
      }
    );

    observer.observe(this.elementRef.nativeElement);
  }
}
