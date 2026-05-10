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

  closeMenu() {
    this.scrollService.isMenuOpen.set(false);
  }

  scrollToSection(index: number) {
    this.closeMenu();
    const main = document.querySelector('main');
    if (main) {
      main.scrollTo({
        top: index * main.clientHeight,
        behavior: 'smooth'
      });
    } else {
      this.router.navigateByUrl('/').then(() => {
        requestAnimationFrame(() => {
          const el = document.querySelector('main');
          if (el) {
            el.scrollTo({
              top: index * el.clientHeight,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  }
}
