import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrl: './grid-display.component.css'
})
export class GridDisplayComponent {
  @Input() items: any[] = [];
}
