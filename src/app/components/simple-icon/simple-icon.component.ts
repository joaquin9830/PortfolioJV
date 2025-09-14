import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DevIconsService } from '../../service/simple-icons.service';

@Component({
  selector: 'app-simple-icon',
  template: `
    <i [class]="iconClass" [style.font-size]="size + 'px'" [style.color]="color"></i>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    i {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class SimpleIconComponent implements OnInit, OnChanges {
  @Input() iconName: string = '';
  @Input() size: number = 24;
  @Input() color: string = '#007ACC';

  iconClass: string = '';

  constructor(private devIconsService: DevIconsService) { }

  ngOnInit(): void {
    this.updateIcon();
  }

  ngOnChanges(): void {
    this.updateIcon();
  }

  private updateIcon(): void {
    if (this.iconName) {
      this.iconClass = this.devIconsService.getIconClass(this.iconName);
    }
  }
}
