import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  public scrollService = inject(ScrollService);

  closeMenu() {
    this.scrollService.isMenuOpen.set(false);
  }
}
