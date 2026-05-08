import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  checked = false;

  toggleCheck() {
    this.checked = !this.checked;
  }
}
