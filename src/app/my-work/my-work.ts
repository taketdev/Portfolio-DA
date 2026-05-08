import { Component, ElementRef, AfterViewInit, inject } from '@angular/core';
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
