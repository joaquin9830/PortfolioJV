import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevIconsService {

  // Mapeo simplificado con solo iconos que sabemos que existen
  private iconMap: { [key: string]: string } = {
    // Frontend Technologies
    'angular': 'devicon-angular-plain',
    'typescript': 'devicon-typescript-plain',
    'rxjs': 'devicon-rxjs-original',
    'bootstrap': 'devicon-bootstrap-plain',
    'css3': 'devicon-css3-plain',
    'html5': 'devicon-html5-plain',
    'javascript': 'devicon-javascript-plain',
    'react': 'devicon-react-original',
    'vue': 'devicon-vuejs-plain',
    
    // Backend & AWS
    'python': 'devicon-python-plain',
    'amazonaws': 'devicon-amazonwebservices-original',
    'nodejs': 'devicon-nodejs-plain',
    'express': 'devicon-express-original',
    'docker': 'devicon-docker-plain',
    
    // Databases
    'mysql': 'devicon-mysql-plain',
    'mongodb': 'devicon-mongodb-plain',
    'postgresql': 'devicon-postgresql-plain',
    'redis': 'devicon-redis-plain',
    
    // DevOps & Tools
    'git': 'devicon-git-plain',
    'github': 'devicon-github-original',
    'gitlab': 'devicon-gitlab-plain',
    'nginx': 'devicon-nginx-original',
    'ubuntu': 'devicon-ubuntu-plain',
    'linux': 'devicon-linux-plain',
    'kubernetes': 'devicon-kubernetes-plain',
    'jenkins': 'devicon-jenkins-plain',
    
    // IDEs & Tools
    'vscode': 'devicon-vscode-plain',
    'intellij': 'devicon-intellij-plain',
    'figma': 'devicon-figma-plain',
    'firebase': 'devicon-firebase-plain',
    'heroku': 'devicon-heroku-plain',
    'azure': 'devicon-azure-plain',
    'google': 'devicon-google-plain',
    'slack': 'devicon-slack-plain',
    'discord': 'devicon-discord-plain',
    'trello': 'devicon-trello-plain',
    'powerpoint': 'devicon-powerpoint-plain',
    'gitbook': 'devicon-gitbook-original',
    'markdown': 'devicon-markdown-original',
    'npm': 'devicon-npm-original-wordmark',
    
    // Specific mappings for current skills
    'reactive-forms': 'devicon-angular-plain',
    'css-responsive': 'devicon-css3-plain',
    'pypdf-library': 'devicon-python-plain',
    'hexagonal-pattern': 'devicon-docker-plain',
    'microservices-architecture': 'devicon-docker-plain',
    'cqrs-pattern': 'devicon-git-plain',
    'data-transfer-objects': 'devicon-npm-original-wordmark',
    'domain-driven-design': 'devicon-git-plain',
    'beaware360-integration': 'devicon-nodejs-plain',
    'oauth2-authentication': 'devicon-google-plain',
    'distributor-management': 'devicon-mysql-plain',
    'validation-component': 'devicon-git-plain',
    'http-requests': 'devicon-nodejs-plain',
    'continuous-integration': 'devicon-git-plain',
    'configuration-management': 'devicon-ubuntu-plain',
    'automated-deployment': 'devicon-docker-plain',
    'stakeholder-presentations': 'devicon-powerpoint-plain',
    
    // AWS specific
    'aws-lambda': 'devicon-amazonwebservices-original',
    'api-gateway': 'devicon-amazonwebservices-original',
    's3': 'devicon-amazonwebservices-original',
    'custom-layers': 'devicon-docker-plain'
  };

  constructor() { }

  getIconClass(iconName: string): string {
    const iconClass = this.iconMap[iconName] || 'devicon-git-plain';
    console.log(`Icon name: ${iconName}, Icon class: ${iconClass}`);
    return iconClass;
  }

  getIconSvg(iconName: string, size: number = 24): string {
    const iconClass = this.getIconClass(iconName);
    return `<i class="${iconClass}" style="font-size: ${size}px;"></i>`;
  }

  // Método para obtener el SVG completo con el color correcto
  getIconSvgWithColor(iconName: string, size: number = 24, color: string = '#007ACC'): string {
    const iconClass = this.getIconClass(iconName);
    return `<i class="${iconClass}" style="font-size: ${size}px; color: ${color};"></i>`;
  }
}