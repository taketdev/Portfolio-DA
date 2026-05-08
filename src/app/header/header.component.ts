import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public scrollService = inject(ScrollService);
}