import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  checked = false;

  toggleCheck() {
    this.checked = !this.checked;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
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
}
