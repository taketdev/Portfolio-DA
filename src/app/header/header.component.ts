import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public scrollService = inject(ScrollService);
  private router = inject(Router);

  socialLinks = {
    github: 'https://github.com/taketdev',
    linkedin: 'https://linkedin.com/in/DEIN_LINKEDIN',
    email: 'mailto:deine@email.com'
  };

  scrollToHero() {
    const main = document.querySelector('main');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigateByUrl('/');
    }
  }
}