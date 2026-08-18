import { Component, signal, computed, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ExperienceTranslationItem, ProjectTranslationItem } from '../../i18n/translations';

export type ExperienceItem = ExperienceTranslationItem;
export type ProjectItem = ProjectTranslationItem;

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly lang = inject(LanguageService);

  selectedProjectIndex = signal<number | null>(null);

  selectedProject = computed<ProjectItem | null>(() => {
    const idx = this.selectedProjectIndex();
    if (idx === null) return null;
    return this.projects()[idx] ?? null;
  });

  experiences = computed<ExperienceItem[]>(() => {
    return this.lang.t().experience.items;
  });

  projects = computed<ProjectItem[]>(() => {
    return this.lang.t().experience.projects;
  });

  openModal(index: number): void {
    this.selectedProjectIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProjectIndex.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscKey(): void {
    if (this.selectedProject()) {
      this.closeModal();
    }
  }
}
