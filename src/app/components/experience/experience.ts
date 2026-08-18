import { Component, signal, HostListener } from '@angular/core';

export interface ExperienceItem {
  step: string;
  title: string;
  roleType: string;
  company: string;
  location: string;
  period: string;
  yearRange: string;
  isCurrent?: boolean;
  statusLabel?: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  category: string;
  status: string;
  metrics: string[];
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
      step: '01',
      title: 'Desarrollador Front-End',
      roleType: 'Pasantía y Práctica Profesional',
      company: 'Dirección de Gestión de Tecnología (DEGT) – UNAH',
      location: 'Tegucigalpa, HN',
      period: 'Enero 2026 – Actualidad',
      yearRange: '2026 — Presente',
      isCurrent: true,
      statusLabel: 'En curso / Activo',
      achievements: [
        'Desarrollo e implementación de interfaces de usuario modernas e interactivas para la plataforma académica Registro V5, aplicando buenas prácticas de diseño responsivo y accesibilidad web.',
        'Desarrollo de APIs RESTful orientadas al procesamiento y gestión de grandes volúmenes de datos académicos y administrativos, dando soporte a los diferentes módulos y roles institucionales.',
        'Coordinación y orientación técnica del equipo de practicantes para con jefes de proyecto, supervisando estándares de código en Angular y TypeScript, resolución de incidencias y flujos de trabajo colaborativos.',
        'Construcción de componentes visuales modulares con Material Design y optimización del rendimiento y tiempos de carga en el cliente.',
      ],
      technologies: ['Angular', 'TypeScript', 'Material Design', 'REST APIs', 'HTML5 / SCSS', 'Liderazgo Técnico'],
    },
    {
      step: '02',
      title: 'Encargado del Departamento de Informática',
      roleType: 'Infraestructura & Servidores',
      company: 'PCservices – Soporte a Grupo W',
      location: 'Tegucigalpa, HN',
      period: 'Enero 2025 – Enero 2026',
      yearRange: '2025 — 2026',
      isCurrent: false,
      statusLabel: 'Completado',
      achievements: [
        'Administración de servidores, mantenimiento de bases de datos relacionales y gestión de infraestructura tecnológica garantizando alta disponibilidad, rendimiento y seguridad de los sistemas de información.',
        'Automatización de rutinas de respaldo, monitoreo continuo de plataformas y soporte técnico especializado.',
      ],
      technologies: ['PL/SQL', 'Linux/Windows Server'],
    },

  ];

  projects: ProjectItem[] = [
    {
      category: 'GESTIÓN DOCUMENTAL & FINANCIAMIENTO',
      status: 'PRODUCCIÓN',
      metrics: ['Generación de 14 PDFs', 'Centralización de Clientes', 'Flujo Automatizado'],
      title: 'Sistema de Gestión Documental & Solicitudes de Crédito',
      subtitle: 'Plataforma desarrollada para Credifisa / Logix ',
      description:
        'Sistema web desarrollado para centralizar la información de clientes y automatizar la generación de documentación relacionada con solicitudes de crédito y seguros. A partir de un único formulario con la información del cliente, el sistema genera automáticamente hasta 14 documentos en formato PDF, incluyendo solicitudes de préstamo, solicitudes de seguros, cartas de autorización y documentación complementaria.',
      architectureDetails: [
        'Frontend desarrollado con Laravel, proporcionando una interfaz centralizada para el registro y gestión de la información de clientes y solicitudes.',
        'Backend desarrollado con Node.js, encargado de procesar la información, gestionar la lógica del sistema y generar dinámicamente la documentación requerida.',
        'Base de datos MySQL utilizada para almacenar y centralizar la información de clientes, solicitudes y datos necesarios para la generación de documentos.',
        'Sistema de generación automatizada de documentos PDF a partir de un único formulario, reduciendo la duplicidad de ingreso de información y agilizando el proceso documental.',
      ],
      image: 'Seguros-Crefisa.jpg',
      tags: ['Laravel', 'Node.js', 'MySQL', 'PDF Generation', 'Gestión Documental'],
    },
    {
      category: 'ARQUITECTURA FRONTEND & SPA',
      status: 'MODERNIZACIÓN V5',
      metrics: ['Arquitectura Modular SPA', 'Angular 21 + TypeScript', 'Componentes Reutilizables'],
      title: 'Modernización del Sistema de Gestión Académica Registro V5',
      subtitle: 'Dirección Ejecutiva de Gestión de Tecnología (DEGT) – UNAH',
      description:
        'Proyecto de transformación tecnológica y rediseño arquitectónico del sistema institucional de gestión académica Registro V5 de la UNAH. La solución desacopló interfaces monolíticas legacy hacia una arquitectura Single Page Application (SPA) moderna, altamente modular, reactiva y escalable para la comunidad universitaria.',
      architectureDetails: [
        'Arquitectura frontend modular orientada a componentes desacoplados y reutilizables en Angular 21, maximizando la mantenibilidad y consistencia visual en todos los flujos del sistema.',
        'Estructuración con TypeScript bajo tipado estricto, inyección de dependencias e interfaces desacopladas para garantizar estabilidad y escalabilidad en lógica de negocio compleja.',
        'Capa de comunicación HTTP centralizada mediante servicios Angular para el consumo de APIs REST, manejo uniforme de errores y optimización de peticiones asíncronas.',
        'Sistema de diseño responsivo y accesible implementado con Material Design.',

      ],
      image: 'unah.jpg',
      tags: ['Angular', 'TypeScript', 'Material Design', 'CSS', 'SPA Architecture', 'REST APIs'],
    },
  ];
}
