import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  isHeroVisible = signal(true);
  isDarkHeader = signal(false);
}
