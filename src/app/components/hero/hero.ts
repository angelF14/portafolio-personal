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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
