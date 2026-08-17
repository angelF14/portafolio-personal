import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  copied = signal(false);
  email = 'floresangelelvir@gmail.com';
  phone = '+504 8777-3101';
  whatsappLink = 'https://wa.me/50487773101';
  githubLink = 'https://github.com/angelF14';
  linkedinLink = 'https://www.linkedin.com/in/angel-elvir-93b090181';

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied.set(true);
      setTimeout(() => {
        this.copied.set(false);
      }, 2800);
    });
  }
}
