export type Language = 'es' | 'en';

export interface ExperienceTranslationItem {
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

export interface ProjectTranslationItem {
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

export interface TranslationSchema {
  nav: {
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    cvBtn: string;
    downloadCvMobile: string;
  };
  hero: {
    availablePill: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    btnTrajectory: string;
    btnDownloadCv: string;
    btnCopyEmail: string;
    toastCopied: string;
    metrics: {
      m1Value: string;
      m1Label: string;
      m2Value: string;
      m2Label: string;
      m3Value: string;
      m3Label: string;
    };
    cockpit: {
      badge: string;
      tabPillars: string;
      tabStack: string;
      tabTerminal: string;
      pillars: {
        frontendTitle: string;
        frontendDesc: string;
        backendTitle: string;
        backendDesc: string;
        dbTitle: string;
        dbDesc: string;
      };
      stack: {
        devopsBadge: string;
        angularDesc: string;
        laravelDesc: string;
        sqlDesc: string;
        cloudDesc: string;
      };
      terminal: {
        whoami: string;
        status: string;
      };
      footerLocation: string;
      footerViewAll: string;
    };
  };
  skills: {
    eyebrow: string;
    streamingStatus: string;
    activeCount: string;
    viewAllBtn: string;
    itemsCount: string;
    categories: {
      all: string;
      frontend: string;
      backend: string;
      database: string;
      devops: string;
    };
  };
  experience: {
    eyebrowTrajectory: string;
    eyebrowProjects: string;
    viewTechSpecs: string;
    specBadge: string;
    items: ExperienceTranslationItem[];
    projects: ProjectTranslationItem[];
    modal: {
      techSpecTag: string;
      sec1Title: string;
      sec2Title: string;
      statusValidated: string;
      escHint: string;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    socialLabel: string;
    cvLabel: string;
    cvFormat: string;
    btnCopy: string;
    btnCopied: string;
    btnWhatsapp: string;
    btnDownload: string;
  };
  footer: {
    brandDesc: string;
    navTitle: string;
    contactTitle: string;
    home: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    copyright: string;
    downloadCv: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      skills: 'Herramientas',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      cvBtn: 'CV PDF',
      downloadCvMobile: 'Descargar CV (PDF)',
    },
    hero: {
      availablePill: 'Disponible para trabajar',
      titlePrefix: 'Desarrollador',
      titleHighlight: 'Web & Software',
      description:
        'Licenciado en Informática Administrativa con experiencia en desarrollo de aplicaciones web, soporte tecnológico y administración de sistemas de información. Especializado en Angular, TypeScript, integración con Laravel/Node.js y gestión de bases de datos PostgreSQL y MySQL.',
      btnTrajectory: 'Ver Trayectoria',
      btnDownloadCv: 'Descargar CV',
      btnCopyEmail: 'Copiar Email',
      toastCopied: '¡Correo copiado al portapapeles!',
      metrics: {
        m1Value: 'End-to-End',
        m1Label: 'UI, APIs & Bases de Datos',
        m2Value: 'Web + TI',
        m2Label: 'Desarrollo & Servidores',
        m3Value: 'Tegucigalpa, Honduras',
        m3Label: 'Ubicación',
      },
      cockpit: {
        badge: 'ESTADO: ACTIVO 100%',
        tabPillars: 'Pilares',
        tabStack: 'Stack Core',
        tabTerminal: 'Terminal',
        pillars: {
          frontendTitle: 'Frontend Moderno',
          frontendDesc:
            'Construcción de interfaces modulares y de alto rendimiento utilizando Angular, TypeScript y diseño responsivo, priorizando la experiencia de usuario y mantenibilidad del código.',
          backendTitle: 'Backend & APIs',
          backendDesc:
            'Integración de servicios y automatización de procesos empresariales mediante PHP (Laravel) y Node.js con autenticación segura y flujos de trabajo eficientes.',
          dbTitle: 'Bases de Datos & Cloud',
          dbDesc:
            'Modelado, consultas complejas (PL/SQL) y optimización en PostgreSQL y MySQL, además de administración de servidores e infraestructura en Google Cloud y AWS.',
        },
        stack: {
          devopsBadge: 'DevOps Core',
          angularDesc: 'Migración modular, arquitectura reactiva y Material Design en DEGT-UNAH (Registro V5)',
          laravelDesc: 'APIs RESTful, autenticación y flujos documentales en Crefisa / Credifisa',
          sqlDesc: 'PL/SQL, Administración y optimización de bases de datos relacionales en Grupo W',
          cloudDesc: 'Despliegue de máquinas virtuales, monitoreo y mantenimiento de infraestructura',
        },
        terminal: {
          whoami: 'Angel Gabriel Flores Elvir — Desarrollador Web & Software',
          status: 'LISTO_PARA_NUEVOS_PROYECTOS',
        },
        footerLocation: 'Ubicación: Tegucigalpa, Honduras (Remoto / Presencial)',
        footerViewAll: 'Ver todas las 15+ herramientas →',
      },
    },
    skills: {
      eyebrow: '// 01. STACK & HERRAMIENTAS',
      streamingStatus: '// STREAMING CONTINUO • PAUSA CON EL CURSOR',
      activeCount: '[ 17 TECNOLOGÍAS ACTIVAS ]',
      viewAllBtn: 'Ver Todas',
      itemsCount: 'ELEMENTOS',
      categories: {
        all: 'Todas las Tecnologías',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Bases de Datos',
        devops: 'Infraestructura & TI',
      },
    },
    experience: {
      eyebrowTrajectory: '// 02. TRAYECTORIA LABORAL',
      eyebrowProjects: '// 03. PROYECTOS DESTACADOS',
      viewTechSpecs: 'Ver Ficha Técnica',
      specBadge: 'SPEC-0',
      items: [
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
      ],
      projects: [
        {
          category: 'GESTIÓN DOCUMENTAL & FINANCIAMIENTO',
          status: 'PRODUCCIÓN',
          metrics: ['Generación de 14 PDFs', 'Centralización de Clientes', 'Flujo Automatizado'],
          title: 'Sistema de Gestión Documental & Solicitudes de Crédito',
          subtitle: 'Plataforma desarrollada para Credifisa / Logix',
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
      ],
      modal: {
        techSpecTag: '// ESPECIFICACIÓN TÉCNICA',
        sec1Title: 'Descripción del Sistema',
        sec2Title: 'Arquitectura & Detalles Técnicos',
        statusValidated: 'Arquitectura validada y en operación',
        escHint: 'ESC',
      },
    },
    contact: {
      eyebrow: '// 04. CONTACTO DIRECTO',
      title: 'Iniciemos una Conversación',
      subtitle:
        'Disponible para oportunidades laborales a tiempo completo, proyectos de desarrollo web y consultoría técnica.',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono / WhatsApp',
      socialLabel: 'Redes Profesionales',
      cvLabel: 'Curriculum Vitae',
      cvFormat: 'PDF',
      btnCopy: 'Copiar',
      btnCopied: '¡Copiado!',
      btnWhatsapp: 'WhatsApp →',
      btnDownload: 'Descargar PDF',
    },
    footer: {
      brandDesc:
        'Desarrollador Front-End & Web especializado en arquitecturas reactivas con Angular, integración con Laravel y administración de bases de datos.',
      navTitle: 'Navegación Rápida',
      contactTitle: 'Conexión Directa',
      home: 'Inicio',
      skills: 'Herramientas & Stack',
      experience: 'Experiencia Laboral',
      projects: 'Proyectos',
      contact: 'Contacto',
      copyright: '© 2026 Angel Gabriel Flores Elvir • Diseñado para alto impacto profesional.',
      downloadCv: 'Descargar CV PDF ↓',
    },
  },
  en: {
    nav: {
      skills: 'Tools & Stack',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      cvBtn: 'Resume PDF',
      downloadCvMobile: 'Download Resume (PDF)',
    },
    hero: {
      availablePill: 'Available for hire',
      titlePrefix: '',
      titleHighlight: 'Web & Software Developer',
      description:
        'Bachelor in Administrative Informatics with proven experience in web application development, IT support, and information systems management. Specialized in Angular, TypeScript, Laravel/Node.js integration, and PostgreSQL & MySQL database management.',
      btnTrajectory: 'View Career',
      btnDownloadCv: 'Download Resume',
      btnCopyEmail: 'Copy Email',
      toastCopied: 'Email copied to clipboard!',
      metrics: {
        m1Value: 'End-to-End',
        m1Label: 'UI, APIs & Databases',
        m2Value: 'Web + IT',
        m2Label: 'Development & Servers',
        m3Value: 'Tegucigalpa, Honduras',
        m3Label: 'Location',
      },
      cockpit: {
        badge: 'STATUS: ACTIVE 100%',
        tabPillars: 'Pillars',
        tabStack: 'Core Stack',
        tabTerminal: 'Terminal',
        pillars: {
          frontendTitle: 'Modern Frontend',
          frontendDesc:
            'Building high-performance, modular user interfaces using Angular, TypeScript, and responsive design, prioritizing user experience and clean code maintainability.',
          backendTitle: 'Backend & APIs',
          backendDesc:
            'Service integration and business workflow automation using PHP (Laravel) and Node.js with secure authentication and efficient data processing.',
          dbTitle: 'Databases & Cloud',
          dbDesc:
            'Data modeling, complex query design (PL/SQL), and optimization on PostgreSQL and MySQL, plus virtual machine and server administration on Google Cloud and AWS.',
        },
        stack: {
          devopsBadge: 'DevOps Core',
          angularDesc: 'Modular migration, reactive state, and Material Design at DEGT-UNAH (Registro V5)',
          laravelDesc: 'RESTful APIs, secure authentication, and document pipelines at Crefisa / Credifisa',
          sqlDesc: 'PL/SQL, relational database administration, and query optimization at Grupo W',
          cloudDesc: 'Virtual machine deployment, proactive monitoring, and server infrastructure support',
        },
        terminal: {
          whoami: 'Angel Gabriel Flores Elvir — Web & Software Developer',
          status: 'READY_FOR_NEW_PROJECTS',
        },
        footerLocation: 'Location: Tegucigalpa, Honduras (Remote / On-site)',
        footerViewAll: 'View all 18+ tools & technologies →',
      },
    },
    skills: {
      eyebrow: '// 01. STACK & TOOLS',
      streamingStatus: '// CONTINUOUS STREAM • PAUSE ON HOVER',
      activeCount: '[ 18 ACTIVE TECHNOLOGIES ]',
      viewAllBtn: 'View All',
      itemsCount: 'ITEMS',
      categories: {
        all: 'All Technologies',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Databases',
        devops: 'Infrastructure & IT',
      },
    },
    experience: {
      eyebrowTrajectory: '// 02. WORK EXPERIENCE',
      eyebrowProjects: '// 03. FEATURED PROJECTS',
      viewTechSpecs: 'View Tech Specs',
      specBadge: 'SPEC-0',
      items: [
        {
          step: '01',
          title: 'Front-End Developer',
          roleType: 'Professional Practice & Internship',
          company: 'Technology Management Directorate (DEGT) – UNAH',
          location: 'Tegucigalpa, HN',
          period: 'January 2026 – Present',
          yearRange: '2026 — Present',
          isCurrent: true,
          statusLabel: 'Ongoing / Active',
          achievements: [
            'Development and implementation of modern, interactive user interfaces for the academic platform Registro V5, enforcing responsive design standards and web accessibility.',
            'Engineered RESTful APIs tailored for managing and processing high-volume academic and administrative records across multiple institutional roles.',
            'Technical guidance and coordination for the intern team alongside project leads, ensuring Angular & TypeScript code standards, issue resolution, and collaborative Git workflows.',
            'Crafted modular visual components with Material Design and client-side performance optimizations for faster initial page loads.',
          ],
          technologies: ['Angular', 'TypeScript', 'Material Design', 'REST APIs', 'HTML5 / SCSS', 'Tech Leadership'],
        },
        {
          step: '02',
          title: 'Head of IT Department',
          roleType: 'Infrastructure & Server Operations',
          company: 'PCservices – Grupo W Support',
          location: 'Tegucigalpa, HN',
          period: 'January 2025 – January 2026',
          yearRange: '2025 — 2026',
          isCurrent: false,
          statusLabel: 'Completed',
          achievements: [
            'Administered enterprise servers, maintained relational database systems, and managed IT infrastructure ensuring high availability, performance, and information security.',
            'Automated routine backups, monitored platforms continuously, and provided specialized technical troubleshooting.',
          ],
          technologies: ['PL/SQL', 'Linux/Windows Server'],
        },
      ],
      projects: [
        {
          category: 'DOCUMENT MANAGEMENT & FINANCING',
          status: 'PRODUCTION',
          metrics: ['14 Automated PDFs', 'Client Centralization', 'Automated Workflow'],
          title: 'Document Management & Loan Application Platform',
          subtitle: 'System developed for Credifisa / Logix',
          description:
            'Enterprise web platform designed to centralize customer data and automate documentation generation for loan and insurance applications. From a single form submission, the system dynamically outputs up to 14 PDF documents, including loan agreements, insurance forms, authorization letters, and supporting records.',
          architectureDetails: [
            'Frontend built with Laravel, delivering a centralized web dashboard for recording and managing client loan files.',
            'Backend powered by Node.js, responsible for request processing, business rules, and dynamic programmatic PDF document generation.',
            'MySQL database structured to centralize customer profiles, application records, and parameterized document templates.',
            'Single-entry automated PDF generation engine, eliminating redundant manual data input and accelerating loan processing times.',
          ],
          image: 'Seguros-Crefisa.jpg',
          tags: ['Laravel', 'Node.js', 'MySQL', 'PDF Generation', 'Document Management'],
        },
        {
          category: 'FRONTEND ARCHITECTURE & SPA',
          status: 'V5 MODERNIZATION',
          metrics: ['Modular SPA Architecture', 'Angular 21 + TypeScript', 'Reusable Components'],
          title: 'Academic Management System Modernization (Registro V5)',
          subtitle: 'Executive Directorate of Technology Management (DEGT) – UNAH',
          description:
            'Digital transformation and architectural revamp of UNAH’s flagship academic management system, Registro V5. The initiative decoupled legacy monolithic UIs into a modern, reactive, modular, and scalable Single Page Application (SPA) for the national university community.',
          architectureDetails: [
            'Modular frontend architecture based on decoupled, reusable components in Angular 21, boosting code maintainability and cross-platform UI consistency.',
            'TypeScript strict typing, dependency injection, and clean service interfaces to maintain stability and scalability in intricate academic business logic.',
            'Centralized HTTP communication layer with Angular services for REST API consumption, unified error handling, and async request optimization.',
            'Accessible, responsive design system engineered using Material Design best practices.',
          ],
          image: 'unah.jpg',
          tags: ['Angular', 'TypeScript', 'Material Design', 'CSS', 'SPA Architecture', 'REST APIs'],
        },
      ],
      modal: {
        techSpecTag: '// TECHNICAL SPECIFICATION',
        sec1Title: 'System Overview',
        sec2Title: 'Architecture & Technical Highlights',
        statusValidated: 'Architecture validated & operational in production',
        escHint: 'ESC',
      },
    },
    contact: {
      eyebrow: '// 04. DIRECT CONTACT',
      title: "Let's Start a Conversation",
      subtitle:
        'Available for full-time software engineering roles, web development projects, and technical consulting.',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      socialLabel: 'Professional Networks',
      cvLabel: 'Curriculum Vitae',
      cvFormat: 'PDF',
      btnCopy: 'Copy',
      btnCopied: 'Copied!',
      btnWhatsapp: 'WhatsApp →',
      btnDownload: 'Download PDF',
    },
    footer: {
      brandDesc:
        'Front-End & Web Developer specializing in reactive architectures with Angular, Laravel API integration, and relational database management.',
      navTitle: 'Quick Navigation',
      contactTitle: 'Direct Connection',
      home: 'Home',
      skills: 'Tools & Stack',
      experience: 'Work Experience',
      projects: 'Projects',
      contact: 'Contact',
      copyright: '© 2026 Angel Gabriel Flores Elvir • Engineered for high professional impact.',
      downloadCv: 'Download Resume PDF ↓',
    },
  },
};
