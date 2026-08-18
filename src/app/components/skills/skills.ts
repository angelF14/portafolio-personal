import { Component, signal, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
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
  readonly lang = inject(LanguageService);
  activeCategory = signal<string>('all');

  categories = computed(() => [
    { id: 'all', label: this.lang.t().skills.categories.all, icon: 'all' },
    { id: 'frontend', label: this.lang.t().skills.categories.frontend, icon: 'frontend' },
    { id: 'backend', label: this.lang.t().skills.categories.backend, icon: 'backend' },
    { id: 'database', label: this.lang.t().skills.categories.database, icon: 'database' },
    { id: 'devops', label: this.lang.t().skills.categories.devops, icon: 'devops' },
  ]);

  skillsList: TechItem[] = [
    // Frontend
    { name: 'Angular', category: 'frontend', iconClass: 'devicon-angular-plain colored', code: 'NG_CORE' },
    { name: 'TypeScript', category: 'frontend', iconClass: 'devicon-typescript-plain colored', code: 'TS_SPEC' },
    { name: 'JavaScript', category: 'frontend', iconClass: 'devicon-javascript-plain colored', code: 'JS_ES6' },
    { name: 'HTML5 & CSS3', category: 'frontend', iconClass: 'devicon-html5-plain colored', code: 'UI_WEB' },
    { name: 'Bootstrap', category: 'frontend', iconClass: 'devicon-bootstrap-plain colored', code: 'CSS_LIB' },

    // Backend
    { name: 'Laravel', category: 'backend', iconClass: 'devicon-laravel-original colored', code: 'LAR_API' },
    { name: 'PHP', category: 'backend', iconClass: 'devicon-php-plain colored', code: 'PHP_SRV' },
    { name: 'Node.js', category: 'backend', iconClass: 'devicon-nodejs-plain colored', code: 'NODE_JS' },
    { name: 'Python', category: 'backend', iconClass: 'devicon-python-plain colored', code: 'PY_AUTO' },
    { name: 'Java', category: 'backend', iconClass: 'devicon-java-plain colored', code: 'JAVA_OOP' },

    // Bases de Datos
    { name: 'PostgreSQL', category: 'database', iconClass: 'devicon-postgresql-plain colored', code: 'PG_REL' },
    { name: 'MySQL', category: 'database', iconClass: 'devicon-mysql-original colored', code: 'SQL_DB' },
    { name: 'Oracle DB & PL/SQL', category: 'database', iconClass: 'devicon-oracle-original colored', code: 'PL_SQL' },

    // Infraestructura & DevOps
    { name: 'Google Cloud (GCP)', category: 'devops', iconClass: 'devicon-googlecloud-plain colored', code: 'GCP_VM' },
    { name: 'AWS', category: 'devops', iconClass: 'devicon-amazonwebservices-plain-wordmark colored', code: 'AWS_NUB' },
    { name: 'Git & GitHub', category: 'devops', iconClass: 'devicon-git-plain colored', code: 'GIT_VCS' },
    { name: 'Linux / Servidores', category: 'devops', iconClass: 'devicon-linux-plain colored', code: 'SRV_UNX' },
    { name: 'Postman', category: 'devops', iconClass: 'devicon-postman-plain colored', code: 'API_TST' },
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

  getCategoryLabel(cat: 'frontend' | 'backend' | 'database' | 'devops'): string {
    return this.lang.t().skills.categories[cat];
  }
}
