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
      emoji: 'staticsEmoji.svg',
      emojiDescription: 'Worked collaboratively in a team environment, contributing to the frontend implementation, responsive layouts, and interactive user features throughout the development process.',
    },
    {
      title: 'Pokedex',
      description:
        'Based on the PokéAPI, a library that provides and displays information about Pokémon. Search and filter through your favorite Pokémon.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Rest-API'],
      image: 'pokedex.png',
      githubLink: '#',
      liveLink: '#',
      emoji: 'pokeEmoji.svg',
      emojiDescription: 'Handled the integration and presentation of dynamic Pokémon data, while contributing to the user interface and overall application structure.',
    },
    {
      title: 'WizardGame',
      description:
        'A horizontal side-scrolling action game based on an object-oriented approach. Help the wizard survive by fighting monsters.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: 'wizardGame.png',
      githubLink: '#',
      liveLink: '#',
      emoji: 'chatEmoji.svg',
      emojiDescription: 'Focused on implementing gameplay elements, animations, and improving the overall player experience during the development of the game.',
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
