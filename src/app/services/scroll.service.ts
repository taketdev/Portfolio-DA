import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  isHeroVisible = signal(true);
  isDarkHeader = signal(false);
  isMenuOpen = signal(false);
  currentPage = signal<'home' | 'legal-notice'>('home');

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
