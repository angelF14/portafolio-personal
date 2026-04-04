import { Component } from '@angular/core';

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      name: 'Lenguajes de Programación',
      icon: 'code',
      skills: ['SQL', 'PL/SQL', 'Python', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'C++']
    },
    {
      name: 'Desarrollo Web',
      icon: 'monitor',
      skills: ['Angular', 'Material Design', 'Bootstrap', 'HTML', 'Node.js', 'Laravel']
    },
    {
      name: 'Bases de Datos',
      icon: 'database',
      skills: ['Oracle', 'MySQL']
    },
    {
      name: 'Herramientas',
      icon: 'tool',
      skills: ['Git', 'GitHub', 'Postman', 'Insomnia', 'Google Cloud', 'AWS (Básico)']
    }
  ];
}
