import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNoticeComponent implements AfterViewInit {
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollService.isDarkHeader.set(true);
    }
  }
}
