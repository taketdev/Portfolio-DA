import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  imports: [],
  templateUrl: './my-work.html',
  styleUrl: './my-work.scss',
})
export class MyWork {
  project = {
    title: 'Join',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    image: 'join.png',
    githubLink: '#',
    liveLink: '#',
  };
}
