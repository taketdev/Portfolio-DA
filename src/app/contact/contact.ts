import { Component, ElementRef, AfterViewInit, inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollService } from '../services/scroll.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  checked = false;
  name = '';
  email = '';
  message = '';
  submitting = false;
  success = false;
  submitted = false;
  errorMessage: string | null = null;

  toggleCheck() {
    this.checked = !this.checked;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async onSubmit() {
    this.submitted = true;

    if (!this.isValidEmail(this.email) && this.email !== '') {
      this.email = '';
    }
    
    if (!this.name || !this.email || !this.isValidEmail(this.email) || !this.message || !this.checked) {
      return;
    }

    this.submitting = true;
    this.success = false;
    this.errorMessage = null;

    try {
      // Der Pfad ist relativ zum Projekt-Root über den Proxy
      const res: any = await lastValueFrom(
        this.http.post('/contactFormMail.php', {
          name: this.name,
          email: this.email,
          message: this.message,
        })
      );

      if (res.success) {
        this.success = true;
        this.submitted = false;
        this.name = '';
        this.email = '';
        this.message = '';
        this.checked = false;
      } else {
        this.errorMessage = res.error || 'Something went wrong.';
      }
    } catch (err: any) {
      this.errorMessage = err.error?.error || 'Server not reachable.';
    } finally {
      this.submitting = false;
      this.cdr.detectChanges();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.scrollService.isDarkHeader.set(false);
          }
        },
        { 
          threshold: 0,
          rootMargin: '-88px 0px -100% 0px'
        }
      );

      observer.observe(this.elementRef.nativeElement);
    }
  }
}
