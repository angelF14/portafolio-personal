import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experience } from './experience';

describe('Experience', () => {
  let component: Experience;
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close project modal', () => {
    expect(component.selectedProject()).toBeNull();
    component.openModal(0);
    expect(component.selectedProject()).toEqual(component.projects()[0]);
    component.closeModal();
    expect(component.selectedProject()).toBeNull();
  });
});
