// header.component.ts
import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AhorroService } from '../../services/ahorrro.service';
import { NgIfContext } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive = false;
  ahorrro: any[] = [];
  noData!: TemplateRef<NgIfContext<boolean>> | null;
  constructor(private router: Router, private ahorrroService:AhorroService) { }
  

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    console.log("Menu Active:", this.menuActive);
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(`/${route}`);
  }

  ngOnInit(): void {
    this.ahorrroService.getListarAhorro(20).subscribe({
      next: (ahorrro: any[]) => {
        console.log(ahorrro);  // Añadir para ver qué datos se están recibiendo
        this.ahorrro = ahorrro;
      },
      error: (error: any) => {
        console.error('Error al obtener eventos', error);
      }
    });
  }

}

