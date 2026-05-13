import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicyComponent implements AfterViewInit {
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollService.isDarkHeader.set(false);
      this.scrollService.isHeroVisible.set(false);
      this.scrollService.currentPage.set('privacy-policy');
    }
  }
}
