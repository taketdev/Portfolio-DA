import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../services/scroll.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './my-work.html',
  styleUrl: './my-work.scss',
})
export class MyWork implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  projects = [
    {
      title: 'Join',
      key: 'join',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      image: 'join.png',
      githubLink: 'https://github.com/nm-97/Join-',
      liveLink: 'https://taketdev.github.io/Join/',
      emoji: 'staticsEmoji.svg',
    },
    {
      title: 'Pokedex',
      key: 'pokedex',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Rest-API'],
      image: 'pokedex.png',
      githubLink: 'https://github.com/taketdev/Pokedex',
      liveLink: 'https://taketdev.github.io/Pokedex/',
      emoji: 'pokeEmoji.svg',
    },
    {
      title: 'WizardGame',
      key: 'wizard',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: 'wizardGame.png',
      githubLink: 'https://github.com/taketdev/2D-Game',
      liveLink: 'https://taketdev.github.io/2D-Game/',
      emoji: 'chatEmoji.svg',
    }
  ];

  currentProjectIndex = signal(0);
  isTransitioning = signal(false);

  get project() {
    return this.projects[this.currentProjectIndex()];
  }

  nextProject() {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.currentProjectIndex.update(i => (i + 1) % this.projects.length);
      setTimeout(() => this.isTransitioning.set(false), 50);
    }, 200);
  }

  prevProject() {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.currentProjectIndex.update(i => (i - 1 + this.projects.length) % this.projects.length);
      setTimeout(() => this.isTransitioning.set(false), 50);
    }, 200);
  }

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
