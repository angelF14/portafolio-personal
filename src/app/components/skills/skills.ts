import { Component, signal, computed } from '@angular/core';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  categoryLabel: string;
  badge: string;
  context: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  activeCategory = signal<string>('all');

  categories = [
    { id: 'all', label: 'Todas las Tecnologías' },
    { id: 'frontend', label: 'Frontend Core' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Bases de Datos & SQL' },
    { id: 'devops', label: 'DevOps & Herramientas' },
  ];

  skillsList: TechItem[] = [
    {
      name: 'Angular 21',
      category: 'frontend',
      categoryLabel: 'Frontend',
      badge: 'Producción / Core',
      context: 'Migración y arquitectura de interfaces modulares en DEGT-UNAH (DIPP).',
      highlight: true,
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      categoryLabel: 'Frontend',
      badge: 'Avanzado',
      context: 'Tipado estricto, interfaces robustas y patrones reactivos.',
      highlight: true,
    },
    {
      name: 'Laravel & PHP',
      category: 'backend',
      categoryLabel: 'Backend',
      badge: 'Producción',
      context: 'Desarrollo de plataforma web de créditos automotrices en Crefisa.',
      highlight: true,
    },
    {
      name: 'Oracle Database & PL/SQL',
      category: 'database',
      categoryLabel: 'Bases de Datos',
      badge: 'Administración',
      context: 'Mantenimiento de bases de datos críticas y soporte a infraestructura en Grupo W.',
      highlight: true,
    },
    {
      name: 'MySQL',
      category: 'database',
      categoryLabel: 'Bases de Datos',
      badge: 'Avanzado',
      context: 'Modelado relacional, consultas optimizadas y gestión transaccional.',
    },
    {
      name: 'Node.js & Express',
      category: 'backend',
      categoryLabel: 'Backend',
      badge: 'Intermedio+',
      context: 'Creación de servicios y APIs REST para flujos documentales.',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      categoryLabel: 'Frontend',
      badge: 'Avanzado',
      context: 'Manipulación del DOM, programación asíncrona y lógica frontend.',
    },
    {
      name: 'HTML5 & CSS3 / SCSS',
      category: 'frontend',
      categoryLabel: 'Frontend',
      badge: 'Avanzado',
      context: 'Diseño responsivo, maquetación semántica y animaciones CSS.',
    },
    {
      name: 'Material Design & Bootstrap',
      category: 'frontend',
      categoryLabel: 'Frontend',
      badge: 'UI Frameworks',
      context: 'Sistemas de diseño accesibles y componentes corporativos coherentes.',
    },
    {
      name: 'Google Cloud Platform (GCP)',
      category: 'devops',
      categoryLabel: 'Cloud / Infra',
      badge: 'Infraestructura',
      context: 'Gestión y configuración de máquinas virtuales y servicios en la nube.',
    },
    {
      name: 'AWS (Nivel Práctico)',
      category: 'devops',
      categoryLabel: 'Cloud / Infra',
      badge: 'Nube',
      context: 'Despliegue y conceptos de infraestructura básica en la nube.',
    },
    {
      name: 'Administración de Servidores',
      category: 'devops',
      categoryLabel: 'DevOps',
      badge: 'Soporte TI',
      context: 'Mantenimiento de sistemas operativos, seguridad y disponibilidad en PCservices.',
    },
    {
      name: 'Git & GitHub',
      category: 'devops',
      categoryLabel: 'Herramientas',
      badge: 'Versionado',
      context: 'Control de versiones, ramas y despliegues continuos.',
    },
    {
      name: 'Postman & Insomnia',
      category: 'devops',
      categoryLabel: 'Testing',
      badge: 'Testing APIs',
      context: 'Validación de endpoints, documentación y pruebas de servicios REST.',
    },
    {
      name: 'Python',
      category: 'backend',
      categoryLabel: 'Lenguajes',
      badge: 'Intermedio',
      context: 'Scripts de automatización y procesamiento de datos.',
    },
    {
      name: 'Java & C++',
      category: 'backend',
      categoryLabel: 'Lenguajes',
      badge: 'Académico / Core',
      context: 'Programación orientada a objetos y algoritmos de sistemas.',
    },
  ];

  filteredSkills = computed(() => {
    const current = this.activeCategory();
    if (current === 'all') return this.skillsList;
    return this.skillsList.filter((s) => s.category === current);
  });

  setCategory(catId: string) {
    this.activeCategory.set(catId);
  }
}
