import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { Skills } from '../../skills/skills';
import { MyWork } from '../../my-work/my-work';
import { Contact } from '../../contact/contact';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, Skills, MyWork, Contact, Footer],
  templateUrl: './home.html',
})
export class HomeComponent {}
