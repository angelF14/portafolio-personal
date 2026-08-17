import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  menuOpen = signal(false);
  scrolled = signal(false);
  activeTab = signal<'stack' | 'impact' | 'terminal'>('stack');
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

  setTab(tab: 'stack' | 'impact' | 'terminal') {
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
