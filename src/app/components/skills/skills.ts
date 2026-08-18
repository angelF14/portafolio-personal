import { Component, signal, computed } from '@angular/core';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  categoryLabel: string;
  iconClass: string;
  code: string;
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
    { id: 'all', label: 'Todas las Tecnologías', icon: 'all' },
    { id: 'frontend', label: 'Frontend', icon: 'frontend' },
    { id: 'backend', label: 'Backend', icon: 'backend' },
    { id: 'database', label: 'Bases de Datos', icon: 'database' },
    { id: 'devops', label: 'Infraestructura & TI', icon: 'devops' },
  ];

  skillsList: TechItem[] = [
    // Frontend
    { name: 'Angular', category: 'frontend', categoryLabel: 'Frontend', iconClass: 'devicon-angular-plain colored', code: 'NG_CORE' },
    { name: 'TypeScript', category: 'frontend', categoryLabel: 'Frontend', iconClass: 'devicon-typescript-plain colored', code: 'TS_SPEC' },
    { name: 'JavaScript', category: 'frontend', categoryLabel: 'Frontend', iconClass: 'devicon-javascript-plain colored', code: 'JS_ES6' },
    { name: 'HTML5 & CSS3', category: 'frontend', categoryLabel: 'Frontend', iconClass: 'devicon-html5-plain colored', code: 'UI_WEB' },
    { name: 'Bootstrap', category: 'frontend', categoryLabel: 'Frontend', iconClass: 'devicon-bootstrap-plain colored', code: 'CSS_LIB' },

    // Backend
    { name: 'Laravel', category: 'backend', categoryLabel: 'Backend', iconClass: 'devicon-laravel-original colored', code: 'LAR_API' },
    { name: 'PHP', category: 'backend', categoryLabel: 'Backend', iconClass: 'devicon-php-plain colored', code: 'PHP_SRV' },
    { name: 'Node.js', category: 'backend', categoryLabel: 'Backend', iconClass: 'devicon-nodejs-plain colored', code: 'NODE_JS' },
    { name: 'Python', category: 'backend', categoryLabel: 'Backend', iconClass: 'devicon-python-plain colored', code: 'PY_AUTO' },
    { name: 'Java', category: 'backend', categoryLabel: 'Backend', iconClass: 'devicon-java-plain colored', code: 'JAVA_OOP' },

    // Bases de Datos
    { name: 'PostgreSQL', category: 'database', categoryLabel: 'Bases de Datos', iconClass: 'devicon-postgresql-plain colored', code: 'PG_REL' },
    { name: 'MySQL', category: 'database', categoryLabel: 'Bases de Datos', iconClass: 'devicon-mysql-original colored', code: 'SQL_DB' },
    { name: 'Oracle DB & PL/SQL', category: 'database', categoryLabel: 'Bases de Datos', iconClass: 'devicon-oracle-original colored', code: 'PL_SQL' },

    // Infraestructura & DevOps
    { name: 'Google Cloud (GCP)', category: 'devops', categoryLabel: 'Infraestructura & TI', iconClass: 'devicon-googlecloud-plain colored', code: 'GCP_VM' },
    { name: 'AWS', category: 'devops', categoryLabel: 'Infraestructura & TI', iconClass: 'devicon-amazonwebservices-plain-wordmark colored', code: 'AWS_NUB' },
    { name: 'Git & GitHub', category: 'devops', categoryLabel: 'Infraestructura & TI', iconClass: 'devicon-git-plain colored', code: 'GIT_VCS' },
    { name: 'Linux / Servidores', category: 'devops', categoryLabel: 'Infraestructura & TI', iconClass: 'devicon-linux-plain colored', code: 'SRV_UNX' },
    { name: 'Postman', category: 'devops', categoryLabel: 'Infraestructura & TI', iconClass: 'devicon-postman-plain colored', code: 'API_TST' },
  ];

  filteredSkills = computed(() => {
    const current = this.activeCategory();
    if (current === 'all') return this.skillsList;
    return this.skillsList.filter((s) => s.category === current);
  });

  setCategory(catId: string) {
    this.activeCategory.set(catId);
  }

  getCategoryCount(catId: string): number {
    if (catId === 'all') return this.skillsList.length;
    return this.skillsList.filter((s) => s.category === catId).length;
  }
}
