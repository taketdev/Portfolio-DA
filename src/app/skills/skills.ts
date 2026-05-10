import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../services/scroll.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

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
