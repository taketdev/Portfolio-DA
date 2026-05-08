import { Component, ElementRef, AfterViewInit, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);

  skills = [
    { name: 'Angular', icon: 'Angular.svg' },
    { name: 'TypeScript', icon: 'TS.svg' },
    { name: 'JavaScript', icon: 'JS.svg' },
    { name: 'HTML', icon: 'HTML.svg' },
    { name: 'CSS', icon: 'CSS.svg' },
    { name: 'Firebase', icon: 'FireBase.svg' },
    { name: 'Git', icon: 'GIT.svg' },
    { name: 'Rest-API', icon: 'API.svg' },
    { name: 'Material Design', icon: 'Material Design.svg' },
    { name: 'Scrum', icon: 'Scrum.svg' }
  ];

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
