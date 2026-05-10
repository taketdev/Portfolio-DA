import { Component, signal, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-indicator.component.html',
  styleUrl: './scroll-indicator.component.scss'
})
export class ScrollIndicator implements AfterViewInit, OnDestroy {
  activeSection = signal(0);
  hasMain = signal(true);
  private pollTimer: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.hasMain.set(!!document.querySelector('main'));
    setTimeout(() => {
      this.detectSection();
      this.pollTimer = setInterval(() => this.detectSection(), 150);
    }, 300);
  }

  ngOnDestroy() {
    if (this.pollTimer) clearInterval(this.pollTimer);
  }

  scrollToSection(index: number) {
    const main = document.querySelector('main');
    if (!main) return;
    
    const clientHeight = main.clientHeight;
    main.scrollTo({
      top: index * clientHeight,
      behavior: 'smooth'
    });
  }

  detectSection() {
    const main = document.querySelector('main');
    if (!main) {
      this.hasMain.set(false);
      return;
    }
    this.hasMain.set(true);
    
    const scrollTop = main.scrollTop;
    const clientHeight = main.clientHeight;
    
    const sectionHeight = clientHeight;
    const currentSection = Math.round(scrollTop / sectionHeight);
    
    const clampedSection = Math.min(currentSection, 4);
    
    this.activeSection.set(clampedSection);
    this.cdr.detectChanges();
  }

  getPointSrc(index: number): string {
    const active = this.activeSection();
    
    if (index === active) {
      switch(active) {
        case 0: return 'assets/scrollIndicator/oragenRoute.svg';
        case 1: return 'assets/scrollIndicator/orangedarkRoute.svg';
        case 2: return 'assets/scrollIndicator/orangedarkRoute.svg';
        case 3: return 'assets/scrollIndicator/oragenRoute.svg';
        case 4: return 'assets/scrollIndicator/orangedarkRoute.svg';
        default: return 'assets/scrollIndicator/oragenRoute.svg';
      }
    }
    
    switch(active) {
      case 0:
        return 'assets/scrollIndicator/whiteCircle.svg';
      case 1:
        return 'assets/scrollIndicator/blackCircle.svg';
      case 2:
        return 'assets/scrollIndicator/whiteCircle.svg';
      case 3:
        return 'assets/scrollIndicator/blackCircle.svg';
      case 4:
        return 'assets/scrollIndicator/whiteCircle.svg';
      default:
        return 'assets/scrollIndicator/whiteCircle.svg';
    }
  }

  isActive(index: number): boolean {
    return this.activeSection() === index;
  }
}