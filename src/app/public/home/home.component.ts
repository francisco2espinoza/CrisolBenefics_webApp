import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Supongamos que estos datos vienen de una API o base de datos
    this.items = [
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
