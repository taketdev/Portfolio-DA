import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID, signal } from '@angular/core';
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

  projects = [
    {
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      image: 'join.png',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Pokedex',
      description:
        'Based on the PokéAPI, a library that provides and displays information about Pokémon. Search and filter through your favorite Pokémon.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Rest-API'],
      image: 'pokedex.png',
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'WizardGame',
      description:
        'A horizontal side-scrolling action game based on an object-oriented approach. Help the wizard survive by fighting monsters.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: 'wizardGame.png',
      githubLink: '#',
      liveLink: '#',
    }
  ];

  currentProjectIndex = signal(0);

  get project() {
    return this.projects[this.currentProjectIndex()];
  }

  nextProject() {
    this.currentProjectIndex.set((this.currentProjectIndex() + 1) % this.projects.length);
  }

  prevProject() {
    this.currentProjectIndex.set((this.currentProjectIndex() - 1 + this.projects.length) % this.projects.length);
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
