import { Component, signal, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly lang = inject(LanguageService);

  menuOpen = signal(false);
  scrolled = signal(false);
  activeTab = signal<'pillars' | 'stack' | 'terminal'>('pillars');
  copiedEmail = signal(false);

  email = 'floresangelelvir@gmail.com';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  setTab(tab: 'pillars' | 'stack' | 'terminal') {
    this.activeTab.set(tab);
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copiedEmail.set(true);
      setTimeout(() => {
        this.copiedEmail.set(false);
      }, 2800);
    });
  }
}
