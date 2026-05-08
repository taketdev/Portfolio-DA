import { Component, ElementRef, AfterViewInit, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
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

    observer.observe(this.elementRef.nativeElement);
  }
}
