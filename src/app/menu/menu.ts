import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  public scrollService = inject(ScrollService);
  private router = inject(Router);

  socialLinks = {
    github: 'https://github.com/taketdev',
    linkedin: 'https://www.linkedin.com/in/max-leyh-a52671362/',
    email: 'mailto:maxleyh17@proton.me'
  };

  closeMenu() {
    this.scrollService.isMenuOpen.set(false);
  }

  scrollToSection(index: number) {
    this.closeMenu();
    const main = document.querySelector('main');
    if (main) {
      const section = main.children[index] as HTMLElement;
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigateByUrl('/').then(() => {
        requestAnimationFrame(() => {
          const el = document.querySelector('main');
          if (el) {
            const section = el.children[index] as HTMLElement;
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });
    }
  }
}
