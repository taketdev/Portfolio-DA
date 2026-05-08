import { Component, ElementRef, AfterViewInit, inject } from '@angular/core';
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

  checked = false;

  toggleCheck() {
    this.checked = !this.checked;
  }

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
