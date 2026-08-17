import { Component, signal, HostListener } from '@angular/core';

export interface ExperienceItem {
  title: string;
  roleType: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  architectureDetails: string[];
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  selectedProject = signal<ProjectItem | null>(null);

  openModal(project: ProjectItem): void {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscKey(): void {
    if (this.selectedProject()) {
      this.closeModal();
    }
  }

  experiences: ExperienceItem[] = [
    {
      title: 'Desarrollador Front-End',
      roleType: 'Pasantía y Práctica Profesional',
      company: 'Dirección de Gestión de Tecnología (DEGT) – UNAH',
      location: 'Tegucigalpa, HN',
      period: 'Enero 2026 – Actualidad',
      achievements: [
        'Migración y modernización integral del sistema de gestión académica Registro V5, enfocado en el rediseño de interfaces e implementación de nuevas funcionalidades con tecnologías web actuales.',
        'Implementación de componentes modulares con Angular y TypeScript, diseño accesible con Material Design y optimización del rendimiento frontend.',
      ],
      technologies: ['Angular 21', 'TypeScript', 'Material Design', 'HTML5/SCSS', 'REST APIs'],
    },
    {
      title: 'Encargado del Departamento de Informática',
      roleType: 'Infraestructura & Servidores',
      company: 'PCservices – Soporte a Grupo W',
      location: 'Tegucigalpa, HN',
      period: 'Enero 2025 – Enero 2026',
      achievements: [
        'Administración de servidores, mantenimiento de bases de datos relacionales y gestión de infraestructura tecnológica garantizando alta disponibilidad, rendimiento y seguridad de los sistemas de información.',
        'Automatización de rutinas de respaldo, monitoreo continuo de plataformas y soporte técnico especializado.',
      ],
      technologies: ['Oracle DB', 'MySQL', 'PL/SQL', 'Google Cloud (GCP)', 'AWS', 'Linux/Windows Server'],
    },
    {
      title: 'Desarrollador Web',
      roleType: 'Plataforma de Crédito y Seguros',
      company: 'Proyecto para Crefisa / Credifisa',
      location: 'Tegucigalpa, HN',
      period: 'Septiembre 2024 – Septiembre 2025',
      achievements: [
        'Desarrollo de plataforma web para automatizar el proceso de créditos automotrices y seguros, implementando módulos para gestión documental, autenticación de usuarios e integración frontend-backend.',
        'Construcción de módulos con Laravel, Node.js y MySQL con autenticación segura y control de acceso.',
      ],
      technologies: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'JavaScript', 'Gestión Documental'],
    },
  ];

  projects: ProjectItem[] = [
    {
      title: 'Sistema de Gestión Documental & Crédito Automotriz',
      subtitle: 'Plataforma para Crefisa / Credifisa (Grupo W)',
      description:
        'Solución integral para automatizar la solicitud, evaluación crediticia y emisión de pólizas de seguros vehiculares. El sistema centraliza la recepción de documentación, validaciones automatizadas y control de firmas digitales.',
      architectureDetails: [
        'Arquitectura MVC robusta construida con PHP / Laravel y servicios auxiliares en Node.js.',
        'Base de datos relacional MySQL optimizada para consultas de expedientes y trazabilidad de auditoría.',
        'Sistema de autenticación y autorización por roles para oficiales de crédito, suscriptores y clientes.',
      ],
      image: 'Seguros-Crefisa.jpg',
      tags: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'RBAC'],
    },
    {
      title: 'Modernización del Sistema de Gestión Académica Registro V5',
      subtitle: 'Dirección de Gestión de Tecnología (DEGT) – UNAH',
      description:
        'Proyecto de rediseño de interfaz y migración tecnológica del sistema de gestión académica Registro V5 de la UNAH, evolucionando interfaces monolíticas hacia una arquitectura modular moderna y fluida.',
      architectureDetails: [
        'Desarrollo con Angular 21 y TypeScript implementando componentes reutilizables y tipado estricto.',
        'Diseño responsivo accesible basado en directrices de Material Design y SCSS estructurado.',
        'Implementación de nuevas funcionalidades y modernización de interfaces académicas con tecnologías web actuales.',
      ],
      image: 'unah.jpg',
      tags: ['Angular 21', 'TypeScript', 'Material Design', 'SCSS', 'SPAs'],
    },
  ];
}
