import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevIconsService {

  // Mapeo de nombres de tecnologías a clases de DevIcons
  private iconMap: { [key: string]: string } = {
    // Frontend Technologies
    'angular': 'devicon-angular-plain',
    'typescript': 'devicon-typescript-plain',
    'rxjs': 'devicon-rxjs-original',
    'bootstrap': 'devicon-bootstrap-plain',
    'css3': 'devicon-css3-plain',
    'form-input': 'devicon-html5-plain',
    
    // Backend & AWS
    'python': 'devicon-python-plain',
    'amazonaws': 'devicon-amazonwebservices-original',
    'adobeacrobatreader': 'devicon-python-plain',
    'layers': 'devicon-docker-plain',
    
    // Architecture
    'hexagon': 'devicon-docker-plain',
    'microservice': 'devicon-docker-plain',
    'command': 'devicon-git-plain',
    'package': 'devicon-npm-original-wordmark',
    'git-branch': 'devicon-git-plain',
    
    // Integrations
    'api': 'devicon-nodejs-plain',
    'oauth': 'devicon-google-plain',
    'building': 'devicon-mysql-plain',
    'check-circle': 'devicon-git-plain',
    'send': 'devicon-git-plain',
    
    // DevOps & CI/CD
    'git-merge': 'devicon-git-plain',
    'settings-2': 'devicon-ubuntu-plain',
    'file-text': 'devicon-markdown-original',
    'server': 'devicon-nginx-original',
    'rocket': 'devicon-docker-plain',
    
    // Professional Skills
    'message-circle': 'devicon-slack-plain',
    'users': 'devicon-github-original',
    'presentation': 'devicon-powerpoint-plain',
    'book-open': 'devicon-gitbook-original',
    'clock': 'devicon-linux-plain',
    
    // Section Icons
    'layout': 'devicon-html5-plain',
    'plug': 'devicon-arduino-plain',
    'settings': 'devicon-ubuntu-plain',
    
    // Stats Icons
    'code': 'devicon-vscode-plain',
    'calendar-check': 'devicon-linux-plain',
    'grid-3x3': 'devicon-trello-plain',
    'cloud': 'devicon-amazonwebservices-original',
    
    // Additional specific icons for better mapping
    'aws-lambda': 'devicon-amazonwebservices-original',
    'pypdf': 'devicon-python-plain',
    'api-gateway': 'devicon-amazonwebservices-original',
    's3': 'devicon-amazonwebservices-original',
    'custom-layers': 'devicon-docker-plain',
    'hexagonal-architecture': 'devicon-docker-plain',
    'microservices': 'devicon-docker-plain',
    'cqrs': 'devicon-git-plain',
    'dtos': 'devicon-npm-original-wordmark',
    'domain-separation': 'devicon-git-plain',
    'beaware360': 'devicon-nodejs-plain',
    'wso2': 'devicon-google-plain',
    'maestro-distribuidores': 'devicon-mysql-plain',
    'validator-component': 'devicon-git-plain',
    'requests': 'devicon-git-plain',
    'cicd-pipelines': 'devicon-git-plain',
    'config-parser': 'devicon-ubuntu-plain',
    'structured-logging': 'devicon-markdown-original',
    'environment-management': 'devicon-nginx-original',
    'automated-deployments': 'devicon-docker-plain',
    'client-communication': 'devicon-slack-plain',
    'workshop-facilitation': 'devicon-github-original',
    'stakeholder-demos': 'devicon-powerpoint-plain',
    'technical-documentation': 'devicon-gitbook-original',
    'effort-estimation': 'devicon-linux-plain'
  };

  constructor() { }

  getIconClass(iconName: string): string {
    return this.iconMap[iconName] || 'devicon-git-plain';
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
