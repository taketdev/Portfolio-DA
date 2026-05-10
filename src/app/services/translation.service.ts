import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  
  // Aktuelle Sprache
  currentLang = signal<'de' | 'en'>('en');
  // Geladene Übersetzungen
  translations = signal<any>({});

  constructor() {
    this.initLanguage();
  }

  private initLanguage() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') as 'de' | 'en';
      if (savedLang) {
        this.setLanguage(savedLang);
      } else {
        this.setLanguage('en');
      }
    } else {
      this.loadTranslations('en');
    }
  }

  async setLanguage(lang: 'de' | 'en') {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
    await this.loadTranslations(lang);
  }

  private async loadTranslations(lang: string) {
    try {
      // In Angular 21 with SSR, assets are usually served under /assets
      const data = await firstValueFrom(
        this.http.get(`assets/i18n/${lang}.json`)
      );
      this.translations.set(data);
    } catch (err) {
      console.error('Could not load translations', err);
    }
  }

  translate(key: string): string {
    const keys = key.split('.');
    let result = this.translations();
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // Fallback: Zeige den Key an
      }
    }
    
    return typeof result === 'string' ? result : key;
  }
}
