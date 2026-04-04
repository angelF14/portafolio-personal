import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ProjectItem {
  title: string;
  description: string;
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
  experiences: ExperienceItem[] = [
    {
      title: 'Desarrollador Front-End (Pasantía)',
      company: 'Dirección de Gestión de Tecnología (DEGT) – UNAH',
      period: 'Enero 2026 - Actualidad',
      description: 'Migración y modernización del sistema de gestión académica DIPP, enfocada en rediseño de interfaces e implementación de nuevas funcionalidades con tecnologías web actuales.',
      technologies: ['Angular', 'TypeScript', 'Material Design', 'HTML', 'CSS']
    },
    {
      title: 'Encargado del Departamento de Informática',
      company: 'PCservices – Soporte a Grupo W',
      period: 'Enero 2025 – Enero 2026',
      description: 'Administración de servidores, mantenimiento de bases de datos y gestión de infraestructura tecnológica, asegurando disponibilidad, rendimiento y seguridad de los sistemas de información.',
      technologies: ['Oracle', 'MySQL', 'AWS', 'Google Cloud', 'PL/SQL']
    },
    {
      title: 'Desarrollador Web - Proyecto Credifisa',
      company: 'Crefisa / Credifisa',
      period: 'Septiembre 2024 – Septiembre 2025',
      description: 'Desarrollo de una plataforma web para la automatización de procesos de crédito automotriz y seguros. Implementación de sistema de gestión documental.',
      technologies: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'JavaScript']
    }
  ];

  projects: ProjectItem[] = [
    {
      title: 'Sistema de Gestión Documental - Grupo W',
      description: 'Plataforma web para automatización de procesos de crédito automotriz y seguros. Gestión documental completa con flujos de aprobación para Crefisa/Credifisa.',
      image: 'Seguros-Crefisa.jpg',
      tags: ['PHP', 'Laravel', 'Node.js', 'MySQL']
    },
    {
      title: 'Modernización DIPP UNAH',
      description: 'Rediseño y migración del sistema de gestión académica DIPP de la UNAH, mejorando la experiencia de usuario y funcionalidades con tecnologías modernas.',
      image: 'unah.jpg',
      tags: ['Angular', 'TypeScript', 'Material Design']
    },
    
  ];
}
