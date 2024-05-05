import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  public expeItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Supongamos que estos datos vienen de una API o base de datos
    this.expeItems = [
      { name: 'Item 1', description: 'Descripción del Item 1' },
      { name: 'Item 2', description: 'Descripción del Item 2' },
      { name: 'Item 3', description: 'Descripción del Item 3' },
      { name: 'Item 4', description: 'Descripción del Item 4' },
      { name: 'Item 5', description: 'Descripción del Item 5' },
      { name: 'Item 6', description: 'Descripción del Item 6' },
      { name: 'Item 7', description: 'Descripción del Item 7' },
      { name: 'Item 8', description: 'Descripción del Item 8' },
      { name: 'Item 9', description: 'Descripción del Item 9' }
    ];
  }
}
