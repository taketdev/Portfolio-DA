import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-my-work',
  imports: [],
  templateUrl: './my-work.html',
  styleUrl: './my-work.scss',
})
export class MyWork implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  project = {
    title: 'Join',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    image: 'join.png',
    githubLink: '#',
    liveLink: '#',
  };

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.scrollService.isDarkHeader.set(true);
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
