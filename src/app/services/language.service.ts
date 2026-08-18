import { Injectable, signal, computed } from '@angular/core';
import { Language, TranslationSchema, translations } from '../i18n/translations';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly STORAGE_KEY = 'portfolio_lang_pref';

  readonly currentLang = signal<Language>(this.getInitialLanguage());

  readonly t = computed<TranslationSchema>(() => {
    return translations[this.currentLang()];
  });

  private getInitialLanguage(): Language {
    try {
      if (typeof localStorage !== 'undefined') {
        const savedLang = localStorage.getItem(this.STORAGE_KEY) as Language;
        if (savedLang === 'es' || savedLang === 'en') {
          return savedLang;
        }
      }
    } catch {
      // Fallback in environments without localStorage
    }
    return 'es';
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, lang);
      }
    } catch {
      // Ignore storage errors
    }
  }

  toggleLanguage(): void {
    const nextLang: Language = this.currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(nextLang);
  }
}
