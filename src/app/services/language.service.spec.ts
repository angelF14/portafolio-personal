import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [LanguageService],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should initialize with default language', () => {
    expect(service.currentLang()).toBe('es');
    expect(service.t().nav.skills).toBe('Herramientas');
    expect(service.cvFile()).toBe('cv_ Angel Gabriel Flores Elvir.pdf');
  });

  it('should toggle language to English', () => {
    service.toggleLanguage();
    expect(service.currentLang()).toBe('en');
    expect(service.t().nav.skills).toBe('Tools & Stack');
    expect(service.cvFile()).toBe('CV_Angel_Gabriel_Flores_Elvir_EN_ATS.pdf');
  });

  it('should switch language explicitly and persist in localStorage', () => {
    service.setLanguage('en');
    expect(service.currentLang()).toBe('en');
    expect(localStorage.getItem('portfolio_lang_pref')).toBe('en');

    service.setLanguage('es');
    expect(service.currentLang()).toBe('es');
    expect(localStorage.getItem('portfolio_lang_pref')).toBe('es');
  });
});
