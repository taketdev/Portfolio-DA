import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { name: 'Angular', icon: 'Angular.svg' },
    { name: 'TypeScript', icon: 'TS.svg' },
    { name: 'JavaScript', icon: 'JS.svg' },
    { name: 'HTML', icon: 'HTML.svg' },
    { name: 'CSS', icon: 'CSS.svg' },
    { name: 'Firebase', icon: 'FireBase.svg' },
    { name: 'Git', icon: 'GIT.svg' },
    { name: 'Rest-API', icon: 'API.svg' },
    { name: 'Material Design', icon: 'Material Design.svg' },
    { name: 'Scrum', icon: 'Scrum.svg' }
  ];
}
