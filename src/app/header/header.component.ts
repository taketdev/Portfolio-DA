import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public scrollService = inject(ScrollService);
  public translationService = inject(TranslationService);
  private router = inject(Router);

  socialLinks = {
    github: 'https://github.com/taketdev',
    linkedin: 'https://linkedin.com/in/DEIN_LINKEDIN',
    email: 'mailto:maxleyh17@proton.me'
  };

  scrollToHero() {
    const main = document.querySelector('main');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigateByUrl('/');
    }
  }

  toggleLanguage() {
    const nextLang = this.translationService.currentLang() === 'de' ? 'en' : 'de';
    this.translationService.setLanguage(nextLang);
  }

  switchLanguage(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
  }
}